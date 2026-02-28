        document.addEventListener('DOMContentLoaded', () => {
            const FONT_COLOR = '#E5E7EB';
            const GRID_COLOR = 'rgba(229, 231, 235, 0.1)';
            const PALETTE = ['#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600'];

            const wrapLabel = (label) => {
                const max_width = 16;
                if (label.length <= max_width) {
                    return label;
                }
                const words = label.split(' ');
                let current_line = '';
                const lines = [];
                words.forEach(word => {
                    if ((current_line + ' ' + word).trim().length > max_width) {
                        lines.push(current_line.trim());
                        current_line = word;
                    } else {
                        current_line = (current_line + ' ' + word).trim();
                    }
                });
                lines.push(current_line.trim());
                return lines;
            };

            const tooltipTitleCallback = (tooltipItems) => {
                const item = tooltipItems[0];
                let label = item.chart.data.labels[item.dataIndex];
                if (Array.isArray(label)) {
                  return label.join(' ');
                } else {
                  return label;
                }
            };

            const defaultOptions = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: FONT_COLOR,
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                           title: tooltipTitleCallback
                        },
                        titleFont: {
                           family: "'Inter', sans-serif"
                        },
                        bodyFont: {
                           family: "'Inter', sans-serif"
                        },
                        backgroundColor: '#1F2937',
                        titleColor: FONT_COLOR,
                        bodyColor: FONT_COLOR
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: FONT_COLOR,
                             font: {
                                family: "'Inter', sans-serif"
                            }
                        },
                        grid: {
                            color: GRID_COLOR
                        }
                    },
                    y: {
                        ticks: {
                            color: FONT_COLOR,
                            font: {
                                family: "'Inter', sans-serif"
                            },
                             callback: function(value) {
                                return '$' + (value / 1000000) + 'M';
                            }
                        },
                        grid: {
                            color: GRID_COLOR
                        },
                         beginAtZero: true
                    }
                }
            };

            const fundsRaisedCtx = document.getElementById('fundsRaisedChart').getContext('2d');
            new Chart(fundsRaisedCtx, {
                type: 'bar',
                data: {
                    labels: ['Solanium', 'MetaDAO (Mtndao)', 'Magic Eden ($ME Launch)'],
                    datasets: [{
                        label: 'Funds Raised (USD)',
                        data: [19270000, 5700000, 11000000],
                        backgroundColor: [PALETTE[1], PALETTE[0], PALETTE[5]],
                        borderColor: [PALETTE[1], PALETTE[0], PALETTE[5]],
                        borderWidth: 1
                    }]
                },
                options: defaultOptions
            });

            const roiCtx = document.getElementById('roiChart').getContext('2d');
            new Chart(roiCtx, {
                type: 'bar',
                data: {
                    labels: ['All-Time High Average ROI', 'Current Average ROI'],
                    datasets: [{
                        label: 'ROI Multiplier (x)',
                        data: [31.84, 0.325],
                        backgroundColor: [PALETTE[4], PALETTE[2]],
                        borderColor: [PALETTE[4], PALETTE[2]],
                        borderWidth: 1
                    }]
                },
                options: {
                    ...defaultOptions,
                    scales: {
                        ...defaultOptions.scales,
                        y: {
                            ...defaultOptions.scales.y,
                            type: 'logarithmic',
                            ticks: {
                                 color: FONT_COLOR,
                                 font: {
                                    family: "'Inter', sans-serif"
                                 },
                                 callback: function(value, index, values) {
                                     if (value === 100 || value === 10 || value === 1 || value === 0.1 || value === 0.01) {
                                         return value + 'x';
                                     }
                                 }
                            }
                        }
                    }
                }
            });

            const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
            new Chart(marketShareCtx, {
                type: 'doughnut',
                data: {
                    labels: ["Pump.fun Token Launches", "Other Solana Token Launches"],
                    datasets: [{
                        data: [71, 29],
                        backgroundColor: [PALETTE[2], '#374151'],
                        borderColor: '#111827',
                        borderWidth: 4
                    }]
                },
                options: {
                     responsive: true,
                     maintainAspectRatio: false,
                     plugins: {
                        legend: {
                           position: 'bottom',
                           labels: {
                               color: FONT_COLOR,
                               font: {
                                   family: "'Inter', sans-serif",
                                   size: 14
                               }
                           }
                        },
                        tooltip: {
                            callbacks: {
                                title: tooltipTitleCallback,
                                label: function(context) {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                     }
                }
            });

            // Gemini API Integration Functions
            const callGeminiAPI = async (prompt) => {
                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                const apiKey = "";
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    const result = await response.json();
                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        return result.candidates[0].content.parts[0].text;
                    } else {
                        return "Error: Could not get a valid response from the AI.";
                    }
                } catch (error) {
                    console.error("Error calling Gemini API:", error);
                    return "Error: Failed to connect to the AI service. Please try again.";
                }
            };

            // Launchpad Recommender
            const projectDescriptionInput = document.getElementById('projectDescription');
            const recommendButton = document.getElementById('recommendButton');
            const recommendationOutput = document.getElementById('recommendationOutput');
            const recommendationLoading = document.getElementById('recommendationLoading');

            recommendButton.addEventListener('click', async () => {
                const description = projectDescriptionInput.value.trim();
                if (!description) {
                    recommendationOutput.textContent = "Please enter a project description.";
                    recommendationOutput.classList.remove('hidden');
                    return;
                }

                recommendationOutput.classList.add('hidden');
                recommendationLoading.classList.remove('hidden');

                const prompt = `Given the following Solana project description, recommend the most suitable Solana token launchpad among Solanium (curated IDO, vetted projects, often requires staking native token like SLIM for allocations), Pump.fun (fair launch bonding curve, instant liquidity, best for meme coins/experimental projects with no prior vetting), and MetaDAO (futarchy, market-based governance, for DAOs where decisions are made by prediction markets). Explain why this launchpad is a good fit and briefly mention the benefits for a founder. Project description: ${description}`;
                const result = await callGeminiAPI(prompt);

                recommendationLoading.classList.add('hidden');
                recommendationOutput.textContent = result;
                recommendationOutput.classList.remove('hidden');
            });

            // Token Strategy Brainstormer
            const projectIdeaInput = document.getElementById('projectIdea');
            const strategyButton = document.getElementById('strategyButton');
            const strategyOutput = document.getElementById('strategyOutput');
            const strategyLoading = document.getElementById('strategyLoading');

            strategyButton.addEventListener('click', async () => {
                const idea = projectIdeaInput.value.trim();
                if (!idea) {
                    strategyOutput.textContent = "Please enter a project idea.";
                    strategyOutput.classList.remove('hidden');
                    return;
                }

                strategyOutput.classList.add('hidden');
                strategyLoading.classList.remove('hidden');

                const prompt = `Suggest a high-level token launch strategy for a Solana project with the following idea: "${idea}". Consider aspects like potential token allocation percentages (e.g., liquidity, team, community, marketing), a suitable launch mechanism (e.g., IDO, fair launch, specific auction model), initial distribution ideas, and key considerations for success on Solana. Provide a concise, bulleted list or short paragraphs.`;
                const result = await callGeminiAPI(prompt);

                strategyLoading.classList.add('hidden');
                strategyOutput.textContent = result;
                strategyOutput.classList.remove('hidden');
            });

            // Crypto Jargon Explainer
            const jargonTermInput = document.getElementById('jargonTerm');
            const explainJargonButton = document.getElementById('explainJargonButton');
            const jargonOutput = document.getElementById('jargonOutput');
            const jargonLoading = document.getElementById('jargonLoading');

            explainJargonButton.addEventListener('click', async () => {
                const term = jargonTermInput.value.trim();
                if (!term) {
                    jargonOutput.textContent = "Please enter a crypto term.";
                    jargonOutput.classList.remove('hidden');
                    return;
                }

                jargonOutput.classList.add('hidden');
                jargonLoading.classList.remove('hidden');

                const prompt = `Explain the crypto term "${term}" in simple, easy-to-understand language for a beginner. Avoid overly complex jargon yourself.`;
                const result = await callGeminiAPI(prompt);

                jargonLoading.classList.add('hidden');
                jargonOutput.textContent = result;
                jargonOutput.classList.remove('hidden');
            });
        });

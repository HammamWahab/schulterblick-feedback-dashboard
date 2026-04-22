const feedbackData = [
  {
    id: 1,
    student: "Leonie K.",
    location: "Bonn-Endenich",
    channel: "Google Reviews",
    sentiment: "promoter",
    rating: 5,
    course: "Class B",
    instructor: "Lars",
    date: "2026-04-16",
    responseHours: 3.2,
    quote: "Super calm teaching style. I felt prepared for the exam and never rushed during practice drives.",
    topics: ["teaching_quality", "exam_confidence"],
  },
  {
    id: 2,
    student: "Emir A.",
    location: "Bonn-Endenich",
    channel: "WhatsApp Follow-up",
    sentiment: "detractor",
    rating: 2,
    course: "Class B",
    instructor: "Nina",
    date: "2026-04-15",
    responseHours: 17.5,
    quote: "Driving lessons were good, but getting answers about schedule changes took way too long.",
    topics: ["scheduling", "response_speed"],
  },
  {
    id: 3,
    student: "Mara T.",
    location: "Bonn-Endenich",
    channel: "Website Form",
    sentiment: "promoter",
    rating: 5,
    course: "Class A2",
    instructor: "Kai",
    date: "2026-04-12",
    responseHours: 5.1,
    quote: "Fast onboarding, friendly office team, and very clear motorcycle preparation.",
    topics: ["onboarding", "friendliness", "teaching_quality"],
  },
  {
    id: 4,
    student: "Jonas S.",
    location: "Bonn-Endenich",
    channel: "In-person Survey",
    sentiment: "passive",
    rating: 4,
    course: "Class B197",
    instructor: "Lars",
    date: "2026-04-09",
    responseHours: 7.4,
    quote: "Good experience overall, but the theory room felt crowded on Saturday morning.",
    topics: ["classroom_comfort", "teaching_quality"],
  },
  {
    id: 5,
    student: "Hannah P.",
    location: "Bonn-Endenich",
    channel: "Google Reviews",
    sentiment: "promoter",
    rating: 5,
    course: "Class BE",
    instructor: "Kai",
    date: "2026-04-08",
    responseHours: 1.9,
    quote: "Trailer training was practical and direct. Felt very safe throughout.",
    topics: ["teaching_quality", "safety"],
  },
  {
    id: 6,
    student: "Timo R.",
    location: "Bonn-Endenich",
    channel: "WhatsApp Follow-up",
    sentiment: "detractor",
    rating: 3,
    course: "Class B",
    instructor: "Nina",
    date: "2026-04-06",
    responseHours: 22.8,
    quote: "Great instructor, but rescheduling because of rain was messy and I had to ask twice.",
    topics: ["scheduling", "response_speed", "weather_rescheduling"],
  },
  {
    id: 7,
    student: "Selin O.",
    location: "Witterschlick",
    channel: "Google Reviews",
    sentiment: "promoter",
    rating: 5,
    course: "Class B",
    instructor: "Nina",
    date: "2026-04-05",
    responseHours: 4.6,
    quote: "Very patient explanations. I was nervous before the test, but the coaching helped a lot.",
    topics: ["teaching_quality", "exam_confidence"],
  },
  {
    id: 8,
    student: "David C.",
    location: "Bonn-Endenich",
    channel: "Website Form",
    sentiment: "passive",
    rating: 4,
    course: "Class C",
    instructor: "Meral",
    date: "2026-04-03",
    responseHours: 8.3,
    quote: "Professional process. More upfront detail about documents for registration would help.",
    topics: ["onboarding", "communication_clarity"],
  },
  {
    id: 9,
    student: "Chiara F.",
    location: "Bonn-Endenich",
    channel: "Google Reviews",
    sentiment: "promoter",
    rating: 5,
    course: "Class B",
    instructor: "Lars",
    date: "2026-03-28",
    responseHours: 2.7,
    quote: "Everyone stayed calm even when I made mistakes. That made learning much easier.",
    topics: ["teaching_quality", "friendliness", "exam_confidence"],
  },
  {
    id: 10,
    student: "Mika E.",
    location: "Bonn-Endenich",
    channel: "WhatsApp Follow-up",
    sentiment: "passive",
    rating: 4,
    course: "Class A",
    instructor: "Kai",
    date: "2026-03-21",
    responseHours: 6.8,
    quote: "Strong motorcycle coaching. Would be even better with clearer pickup point reminders.",
    topics: ["teaching_quality", "communication_clarity"],
  },
  {
    id: 11,
    student: "Noah M.",
    location: "Bonn-Endenich",
    channel: "In-person Survey",
    sentiment: "promoter",
    rating: 5,
    course: "Class B",
    instructor: "Nina",
    date: "2026-03-18",
    responseHours: 5.3,
    quote: "Office staff and instructor were both friendly. Booking extra lessons was simple.",
    topics: ["friendliness", "onboarding", "scheduling"],
  },
  {
    id: 12,
    student: "Lina B.",
    location: "Witterschlick",
    channel: "Google Reviews",
    sentiment: "detractor",
    rating: 2,
    course: "Class B",
    instructor: "Meral",
    date: "2026-03-15",
    responseHours: 18.4,
    quote: "The lessons themselves were helpful, but I waited too long for confirmation after my inquiry.",
    topics: ["response_speed", "onboarding"],
  },
];

const monthlyTrend = [
  { month: "Nov", rating: 4.3, feedback: 12 },
  { month: "Dec", rating: 4.4, feedback: 15 },
  { month: "Jan", rating: 4.5, feedback: 17 },
  { month: "Feb", rating: 4.6, feedback: 18 },
  { month: "Mar", rating: 4.7, feedback: 22 },
  { month: "Apr", rating: 4.8, feedback: 27 },
];

const actionQueue = [
  {
    title: "Set a reply playbook for schedule changes",
    owner: "Office team",
    impact: "High",
    urgency: 9.2,
    detail: "Most detractor comments cluster around unanswered rescheduling questions within the first 12 hours.",
  },
  {
    title: "Send automatic registration checklist after first inquiry",
    owner: "Admin",
    impact: "Medium",
    urgency: 7.8,
    detail: "Document confusion appears in website-form submissions for truck and motorcycle applicants.",
  },
  {
    title: "Reduce Saturday room crowding",
    owner: "Operations",
    impact: "Medium",
    urgency: 6.9,
    detail: "Theory lesson comfort is a small but repeatable friction point in Bonn-Endenich.",
  },
];

const state = {
  location: "All locations",
  channel: "All channels",
  sentiment: "All sentiments",
  course: "All courses",
  search: "",
};

const els = {
  locationFilter: document.querySelector("#locationFilter"),
  channelFilter: document.querySelector("#channelFilter"),
  sentimentFilter: document.querySelector("#sentimentFilter"),
  courseFilter: document.querySelector("#courseFilter"),
  searchInput: document.querySelector("#searchInput"),
  exportButton: document.querySelector("#exportButton"),
  statsGrid: document.querySelector("#statsGrid"),
  trendChart: document.querySelector("#trendChart"),
  topicBars: document.querySelector("#topicBars"),
  coachList: document.querySelector("#coachList"),
  actionList: document.querySelector("#actionList"),
  feedbackList: document.querySelector("#feedbackList"),
  feedbackCountMeta: document.querySelector("#feedbackCountMeta"),
  activeFilters: document.querySelector("#activeFilters"),
  heroRating: document.querySelector("#heroRating"),
  heroRatingDelta: document.querySelector("#heroRatingDelta"),
  heroNps: document.querySelector("#heroNps"),
  heroPromoters: document.querySelector("#heroPromoters"),
  heroSla: document.querySelector("#heroSla"),
  heroSlaDelta: document.querySelector("#heroSlaDelta"),
  promoterArc: document.querySelector("#promoterArc"),
  passiveArc: document.querySelector("#passiveArc"),
  detractorArc: document.querySelector("#detractorArc"),
  donutLegend: document.querySelector("#donutLegend"),
  sentimentSummary: document.querySelector("#sentimentSummary"),
  trendMeta: document.querySelector("#trendMeta"),
};

const topicLabels = {
  teaching_quality: "Teaching quality",
  exam_confidence: "Exam confidence",
  response_speed: "Response speed",
  scheduling: "Scheduling",
  onboarding: "Onboarding",
  friendliness: "Friendliness",
  classroom_comfort: "Classroom comfort",
  communication_clarity: "Communication clarity",
  safety: "Safety",
  weather_rescheduling: "Weather rescheduling",
};

function initFilters() {
  populateSelect(els.locationFilter, "All locations", uniqueValues(feedbackData, "location"));
  populateSelect(els.channelFilter, "All channels", uniqueValues(feedbackData, "channel"));
  populateSelect(els.sentimentFilter, "All sentiments", ["promoter", "passive", "detractor"]);
  populateSelect(els.courseFilter, "All courses", uniqueValues(feedbackData, "course"));

  els.locationFilter.addEventListener("change", (event) => {
    state.location = event.target.value;
    render();
  });
  els.channelFilter.addEventListener("change", (event) => {
    state.channel = event.target.value;
    render();
  });
  els.sentimentFilter.addEventListener("change", (event) => {
    state.sentiment = event.target.value;
    render();
  });
  els.courseFilter.addEventListener("change", (event) => {
    state.course = event.target.value;
    render();
  });
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });
  els.exportButton.addEventListener("click", exportSnapshot);
}

function populateSelect(select, defaultLabel, values) {
  select.innerHTML = "";
  [defaultLabel, ...values].forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function uniqueValues(collection, key) {
  return [...new Set(collection.map((entry) => entry[key]))];
}

function getFilteredFeedback() {
  return feedbackData.filter((entry) => {
    const matchesLocation = state.location === "All locations" || entry.location === state.location;
    const matchesChannel = state.channel === "All channels" || entry.channel === state.channel;
    const matchesSentiment = state.sentiment === "All sentiments" || entry.sentiment === state.sentiment;
    const matchesCourse = state.course === "All courses" || entry.course === state.course;
    const haystack = [entry.student, entry.instructor, entry.quote, entry.channel, entry.course, entry.location]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !state.search || haystack.includes(state.search);
    return matchesLocation && matchesChannel && matchesSentiment && matchesCourse && matchesSearch;
  });
}

function calculateMetrics(entries) {
  const total = entries.length;
  const averageRating = total ? entries.reduce((sum, entry) => sum + entry.rating, 0) / total : 0;
  const averageResponse = total ? entries.reduce((sum, entry) => sum + entry.responseHours, 0) / total : 0;
  const sentimentCounts = entries.reduce(
    (acc, entry) => {
      acc[entry.sentiment] += 1;
      return acc;
    },
    { promoter: 0, passive: 0, detractor: 0 },
  );
  const nps = total ? Math.round(((sentimentCounts.promoter - sentimentCounts.detractor) / total) * 100) : 0;
  const responseTargetShare = total
    ? Math.round((entries.filter((entry) => entry.responseHours <= 8).length / total) * 100)
    : 0;
  return {
    total,
    averageRating,
    averageResponse,
    sentimentCounts,
    nps,
    responseTargetShare,
  };
}

function renderMetrics(metrics) {
  const cards = [
    {
      label: "Feedback captured",
      value: metrics.total,
      note: "Across reviews, forms, and follow-ups",
      series: [3, 4, 4, 6, 7, 8, 10],
    },
    {
      label: "Average rating",
      value: metrics.averageRating.toFixed(1),
      note: "Weighted by visible review score",
      series: [3.8, 4.1, 4.2, 4.4, 4.5, 4.7, 4.8],
    },
    {
      label: "Replies within 8h",
      value: `${metrics.responseTargetShare}%`,
      note: "Operational service-level view",
      series: [42, 49, 55, 61, 64, 71, 75],
    },
    {
      label: "Critical issues",
      value: entriesWithTopic(getFilteredFeedback(), ["response_speed", "scheduling"]).length,
      note: "Entries mentioning time-sensitive friction",
      series: [7, 6, 5, 6, 4, 4, 3],
    },
  ];

  els.statsGrid.innerHTML = cards
    .map(
      (card, index) => `
        <article class="metric-card">
          <small>${card.label}</small>
          <strong>${card.value}</strong>
          <small>${card.note}</small>
          <div class="metric-card__spark">${sparklineSvg(card.series, `spark-${index}`)}</div>
        </article>
      `,
    )
    .join("");
}

function entriesWithTopic(entries, topics) {
  return entries.filter((entry) => topics.some((topic) => entry.topics.includes(topic)));
}

function sparklineSvg(series, gradientId) {
  const max = Math.max(...series);
  const min = Math.min(...series);
  const points = series
    .map((value, index) => {
      const x = (index / (series.length - 1)) * 100;
      const y = 40 - ((value - min) / (max - min || 1)) * 28;
      return `${x},${y}`;
    })
    .join(" ");

  return `
    <svg class="sparkline" viewBox="0 0 100 44" preserveAspectRatio="none">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stop-color="rgba(88,166,255,1)" />
          <stop offset="100%" stop-color="rgba(53,214,193,1)" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="url(#${gradientId})" stroke-width="3" points="${points}" />
    </svg>
  `;
}

function exportSnapshot() {
  const filtered = getFilteredFeedback();
  const metrics = calculateMetrics(filtered);
  const payload = {
    exportedAt: new Date().toISOString(),
    filters: { ...state },
    metrics,
    entries: filtered,
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "schulterblick-feedback-snapshot.json";
  link.click();
  URL.revokeObjectURL(url);
}

function renderHero(metrics) {
  const promoterShare = metrics.total ? Math.round((metrics.sentimentCounts.promoter / metrics.total) * 100) : 0;
  els.heroRating.textContent = metrics.averageRating.toFixed(1);
  els.heroNps.textContent = metrics.nps;
  els.heroSla.textContent = `${metrics.averageResponse.toFixed(1)}h`;
  els.heroPromoters.textContent = `${promoterShare}% promoters`;
  els.heroRatingDelta.textContent = metrics.averageRating >= 4.6 ? "+0.2 vs last month" : "Below recent peak";
  els.heroSlaDelta.textContent =
    metrics.averageResponse <= 8 ? "Target under 8h" : "Above target, needs attention";

  const filters = [
    state.location,
    state.channel,
    state.sentiment,
    state.course,
    state.search ? `Search: ${state.search}` : "",
  ].filter((value) => value && !value.startsWith("All"));

  els.activeFilters.innerHTML = filters.length
    ? filters.map((filter) => `<span class="chip">${filter}</span>`).join("")
    : `<span class="chip">All live feedback</span><span class="chip">Sample operating dataset</span>`;
}

function renderTrend() {
  const visibleTrend = monthlyTrend;
  els.trendMeta.textContent = "Last 6 months";
  els.trendChart.innerHTML = visibleTrend
    .map((entry, index, list) => {
      const height = 30 + entry.feedback * 4.5;
      const previous = list[index - 1];
      const currentY = 160 - ((entry.rating - 4.2) / 0.7) * 120;
      const previousY = previous ? 160 - ((previous.rating - 4.2) / 0.7) * 120 : currentY;
      const lineSvg = previous
        ? `<svg class="trend-col__line" viewBox="0 0 120 168" preserveAspectRatio="none">
            <line x1="0" y1="${previousY}" x2="120" y2="${currentY}" stroke="rgba(241,189,92,0.8)" stroke-width="3" stroke-linecap="round" />
            <circle cx="120" cy="${currentY}" r="5.5" fill="rgba(241,189,92,1)" />
          </svg>`
        : `<svg class="trend-col__line" viewBox="0 0 120 168" preserveAspectRatio="none">
            <circle cx="0" cy="${currentY}" r="5.5" fill="rgba(241,189,92,1)" />
          </svg>`;

      return `
        <div class="trend-col">
          <div class="trend-col__canvas">
            <div class="trend-col__bar" style="height:${height}px"></div>
            ${lineSvg}
          </div>
          <div class="trend-col__meta">
            <strong>${entry.month}</strong>
            <small>${entry.feedback} entries · ${entry.rating.toFixed(1)} rating</small>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSentiment(metrics) {
  const total = metrics.total || 1;
  const entries = [
    { key: "promoter", label: "Promoters", value: metrics.sentimentCounts.promoter, color: "var(--teal)" },
    { key: "passive", label: "Passives", value: metrics.sentimentCounts.passive, color: "var(--gold)" },
    { key: "detractor", label: "Detractors", value: metrics.sentimentCounts.detractor, color: "var(--rose)" },
  ];

  let offset = 0;
  entries.forEach((entry) => {
    const portion = entry.value / total;
    const length = portion * 490.1;
    const arc = document.querySelector(`#${entry.key}Arc`);
    arc.style.strokeDasharray = `${Math.max(length - 10, 0)} 490.1`;
    arc.style.strokeDashoffset = `${-offset}`;
    offset += length;
  });

  els.donutLegend.innerHTML = entries
    .map((entry) => {
      const share = Math.round((entry.value / total) * 100);
      return `
        <div class="legend-item">
          <span><span class="legend-item__swatch" style="background:${entry.color}"></span> ${entry.label}</span>
          <strong>${share}%</strong>
        </div>
      `;
    })
    .join("");

  els.sentimentSummary.textContent = `${metrics.nps} NPS from filtered feedback`;
}

function renderTopics(entries) {
  const topicCounts = entries.reduce((acc, entry) => {
    entry.topics.forEach((topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
    });
    return acc;
  }, {});

  const topTopics = Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const max = topTopics.length ? topTopics[0][1] : 1;
  els.topicBars.innerHTML = topTopics.length
    ? topTopics
        .map(
          ([topic, value]) => `
            <div class="bar">
              <div class="bar__row">
                <span>${topicLabels[topic] || topic}</span>
                <span class="bar__value">${value}</span>
              </div>
              <div class="bar__track">
                <div class="bar__fill" style="width:${(value / max) * 100}%"></div>
              </div>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state">No issue themes match the current filter set.</div>`;
}

function renderCoaches(entries) {
  const grouped = entries.reduce((acc, entry) => {
    const coach = acc[entry.instructor] || {
      name: entry.instructor,
      ratingTotal: 0,
      count: 0,
      promoterCount: 0,
      averageResponse: 0,
    };
    coach.ratingTotal += entry.rating;
    coach.count += 1;
    coach.promoterCount += entry.sentiment === "promoter" ? 1 : 0;
    coach.averageResponse += entry.responseHours;
    acc[entry.instructor] = coach;
    return acc;
  }, {});

  const list = Object.values(grouped)
    .map((coach) => ({
      ...coach,
      averageRating: coach.ratingTotal / coach.count,
      promoterShare: Math.round((coach.promoterCount / coach.count) * 100),
      averageResponse: coach.averageResponse / coach.count,
      composite: coach.ratingTotal / coach.count + coach.promoterCount / coach.count,
    }))
    .sort((a, b) => b.composite - a.composite);

  els.coachList.innerHTML = list.length
    ? list
        .map(
          (coach) => `
            <div class="coach-card">
              <div class="coach-card__top">
                <div>
                  <strong>${coach.name}</strong>
                  <div class="coach-card__meta">
                    <span>${coach.count} feedback items</span>
                    <span>${coach.promoterShare}% promoters</span>
                  </div>
                </div>
                <div class="coach-card__rating">${coach.averageRating.toFixed(1)}</div>
              </div>
              <div class="coach-card__meta">
                <strong>${coach.averageResponse.toFixed(1)}h avg admin loop</strong>
              </div>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state">No instructor data is available for this filter combination.</div>`;
}

function renderActions(entries) {
  const relevantTopics = new Set(entries.flatMap((entry) => entry.topics));
  const visibleActions = actionQueue.filter((item) => {
    if (relevantTopics.has("response_speed") && item.title.includes("reply playbook")) {
      return true;
    }
    if (relevantTopics.has("onboarding") && item.title.includes("registration checklist")) {
      return true;
    }
    if (relevantTopics.has("classroom_comfort") && item.title.includes("Saturday room crowding")) {
      return true;
    }
    return relevantTopics.size === 0;
  });

  els.actionList.innerHTML = visibleActions.length
    ? visibleActions
        .map(
          (item) => `
            <div class="action-card">
              <div class="action-card__top">
                <div>
                  <strong>${item.title}</strong>
                  <p>${item.detail}</p>
                </div>
                <div class="action-card__score">${item.urgency.toFixed(1)}</div>
              </div>
              <div class="coach-card__meta">
                <span>Owner: ${item.owner}</span>
                <span>Impact: ${item.impact}</span>
              </div>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state">No action items are triggered by the current filtered view.</div>`;
}

function renderFeedback(entries) {
  const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
  els.feedbackCountMeta.textContent = `${sorted.length} matching feedback entries`;
  els.feedbackList.innerHTML = sorted.length
    ? sorted
        .map(
          (entry) => `
            <article class="feedback-card">
              <div class="feedback-card__top">
                <div>
                  <strong>${entry.student}</strong>
                  <div class="feedback-card__meta">
                    <span>${entry.location}</span>
                    <span>${entry.channel}</span>
                    <span>${entry.course}</span>
                    <span>${entry.date}</span>
                  </div>
                </div>
                <div>
                  <div class="feedback-card__score">${entry.rating.toFixed(1)}</div>
                  <div class="feedback-card__tag" data-tone="${entry.sentiment}">${capitalize(entry.sentiment)}</div>
                </div>
              </div>
              <p class="feedback-card__quote">"${entry.quote}"</p>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">No feedback matches the selected filters or search term.</div>`;
}

function capitalize(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function render() {
  const filtered = getFilteredFeedback();
  const metrics = calculateMetrics(filtered);
  renderHero(metrics);
  renderMetrics(metrics);
  renderTrend();
  renderSentiment(metrics);
  renderTopics(filtered);
  renderCoaches(filtered);
  renderActions(filtered);
  renderFeedback(filtered);
}

initFilters();
render();

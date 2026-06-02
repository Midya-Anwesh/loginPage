export const dashboardData = {
  // Global dashboard header controls
  header: {
    selectedDateRange: "Nov 01 - Nov 14 / Oct 18 - Oct 31",
    journalNotificationCount: 7
  },

  // Top Section: Single Goal Progress Bars
  goals: [
    {
      title: "Practice Match Goal",
      dateRange: "Dec 17 - Dec 31",
      achieved: 9,
      target: 12
    },
    {
      title: "Tournament Match Goal",
      dateRange: "Dec 17 - Dec 31",
      achieved: 9,
      target: 12
    }
  ],

  // Middle Section: Win-Loss Ratio Comparisons
  ratios: [
    {
      title: "Match Win - Loss Ratio",
      bgColor: '#FF9E57',
      activeFilter: ["Practice", "Tournament", "Combined"],
      periods: [
        {
          dateRange: "Dec 02 - Dec 16",
          total: 10,
          wins: 5,
          losses: 5
        },
        {
          dateRange: "Dec 17 - Dec 31",
          total: 10,
          wins: 5,
          losses: 5
        }
      ],
      comparison: [
        {id: 'period1', dateRange: "Dec 2 - 16", winRate: 50 },
        {id: 'period2', dateRange: "Dec 17 - 31", winRate: 50 },
        {id: 'trend', winChange: "50% win", lossChange: "50% loss" }
      ]
    },
    {
      title: "Set Win - Loss Ratio",
      bgColor: '#F8B84E',
      activeFilter: ["2 Sets", "3 Sets"],
      periods: [
        {
          dateRange: "Dec 02 - Dec 16",
          total: 10,
          wins: 5,
          losses: 5
        },
        {
          dateRange: "Dec 17 - Dec 31",
          total: 10,
          wins: 7,
          losses: 3
        }
      ],
      comparison: [
        {id: 'period1', dateRange: "Dec 2 - 16", winRate: 50 },
        {id: 'period2', dateRange: "Dec 17 - 31", winRate: 50 },
        {id: 'trend', winChange: "50% win", lossChange: "50% loss" }
      ]
    }
  ],

  // Bottom Section: Historical Session Performance Lists
  performanceMetrics: {
    activeTab: ["Level of Play", "Feel Good Factor", "Accept + Deal"],
    categories: [
      {
        title: "Training Sessions",
        color: "#2088FF", // Blue indicator
        history: [
          { dateRange: "Nov 01 - Nov 14", average: 5 },
          { dateRange: "Oct 18 - Oct 31", average: 8 }
        ]
      },
      {
        title: "Practice Matches",
        color: "#FF7D20", // Orange indicator
        history: [
          { dateRange: "Nov 01 - Nov 14", average: 5 },
          { dateRange: "Oct 18 - Oct 31", average: 8 }
        ]
      },
      {
        title: "Tournament Matches",
        color: "#91CC00", // Green indicator
        history: [
          { dateRange: "Nov 01 - Nov 14", average: 5 },
          { dateRange: "Oct 18 - Oct 31", average: 8 }
        ]
      }
    ]
  }
};
const table = new Vue({
  el: "#table",
  data: {
    flag: true,
    tableSeasons: [
      {
        id: 1,
        seasons: "Сезон 2021/2020",
        games: "5",
        goal: "3",
        pass: "2",
        goalPlusPass: "1",
        rating: "89.40",
      },
      {
        id: 2,
        seasons: "Сезон 2020/2019",
        games: "2",
        goal: "4",
        pass: "6",
        goalPlusPass: "2",
        rating: "84.40",
      },
      {
        id: 3,
        seasons: "Сезон 2019/2018",
        games: "13",
        goal: "11",
        pass: "5",
        goalPlusPass: "7",
        rating: "95.20",
      },
      {
        id: 4,
        seasons: "Сезон 2019/2018",
        games: "7",
        goal: "6",
        pass: "0",
        goalPlusPass: "1",
        rating: "66.30",
      },
      {
        id: 5,
        seasons: "Сезон 2017/2016",
        games: "24",
        goal: "5",
        pass: "2",
        goalPlusPass: "4",
        rating: "55.55",
      },
    ],
  },
  methods: {
    Sort(sortParam) {
      switch (sortParam) {
        case "games":
          if (this.flag) {
            this.flag = false;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.games) > parseInt(b.games) ? 1 : -1;
            });
          } else {
            this.flag = true;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.games) < parseInt(b.games) ? 1 : -1;
            });
          }
        case "goal":
          if (this.flag) {
            this.flag = false;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.goal) > parseInt(b.goal) ? 1 : -1;
            });
          } else {
            this.flag = true;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.goal) < parseInt(b.goal) ? 1 : -1;
            });
          }
        case "pass":
          if (this.flag) {
            this.flag = false;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.pass) > parseInt(b.pass) ? 1 : -1;
            });
          } else {
            this.flag = true;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.pass) < parseInt(b.pass) ? 1 : -1;
            });
          }
        case "goalPlusPass":
          if (this.flag) {
            this.flag = false;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.goalPlusPass) > parseInt(b.goalPlusPass)
                ? 1
                : -1;
            });
          } else {
            this.flag = true;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.goalPlusPass) < parseInt(b.goalPlusPass)
                ? 1
                : -1;
            });
          }
        case "rating":
          if (this.flag) {
            this.flag = false;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.rating) > parseInt(b.rating) ? 1 : -1;
            });
          } else {
            this.flag = true;
            return this.tableSeasons.sort((a, b) => {
              return parseInt(a.rating) < parseInt(b.rating) ? 1 : -1;
            });
          }
        default:
          return this.tableSeasons;
      }
    },
  },
});

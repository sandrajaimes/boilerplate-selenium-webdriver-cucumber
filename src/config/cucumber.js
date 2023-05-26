const moment = require("moment");

module.exports = {
    default: {
        paths: ["src/features/**/*.feature"],
        format: [
            "progress-bar",
            `json:src/report/default/${moment().format("YYYYMMDDHHmmss")}/${moment().format("YYYYMMDDHHmmss")}.json`,
        ],
        parallel: 2,
        default: '--publish-quiet'
    },
};

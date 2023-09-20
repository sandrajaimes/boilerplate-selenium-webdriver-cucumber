//import moment from "moment";
const moment= require("moment");

module.exports = {
    default: {
        paths: ["dist/features/**/*.feature"],
        format: [
            'progress-bar',
            `json:dist/report/default/${moment().format("YYYYMMDDHHmmss")}/${moment().format("YYYYMMDDHHmmss")}.json`,
        ],
        requireModule: ['ts-node/register'],
        parallel: 2
    },
};

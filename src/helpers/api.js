const library = (function () {
    const axios = require('axios');
    // const BASE_URL = `https://genomelink.io`
    const BASE_URL = `http://localhost:3001`

    function getReport(reportName) {
        const url = `${BASE_URL}/report/${reportName}`
        return axios.get(url);
    }

    return {
        getReport
    }

})();
module.exports = library;
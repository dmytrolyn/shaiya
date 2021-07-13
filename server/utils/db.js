const q = require('../queries/utils');
const { runPreparedQuery } = require('../config/db');

const getFreeSlots = async (uid, count = 1) => {
    let slotsResp = await runPreparedQuery(q.getOccupiedBankSlots, { uid });
    let freeSlots = [];
    for(let i = 0; i < 240; i++) {
        if(slotsResp.recordset.some(item => item.Slot === i)) {
            continue;
        }
        else {
            freeSlots.push(i);
            if(freeSlots.length < count) continue;
            else break;
        }
    }
    return freeSlots;
}

module.exports = {
    getFreeSlots
}
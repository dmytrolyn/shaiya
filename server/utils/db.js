const q = require('../queries/utils');
const { runPreparedQuery } = require('../config/db');

const getFirstFreeSlot = async (uid) => {
    let slotsResp = await runPreparedQuery(q.getOccupiedBankSlots, { uid });
    let freeSlot = null;
    for(let i = 0; i < 240; i++) {
        if(slotsResp.recordset.some(item => item.Slot === i)) {
            continue;
        }
        else {
            freeSlot = i;
            break;
        }
    }
    return freeSlot;
}

module.exports = {
    getFirstFreeSlot
}
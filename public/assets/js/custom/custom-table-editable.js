/*
---------------------------------------
    : Custom - Table Editable js :
---------------------------------------
*/
"use strict";
$(document).ready(function() {
    /* -- Table - Editable -- */
    $('#edit-btn').Tabledit({
        columns: {
            identifier: [0, 'id'],                    
            editable: [[1, 'name'], [2, 'position'], [3, 'email'], [4, 'phone']]
        }
    });
    $('#edit-click').Tabledit({
        editButton: false,
        deleteButton: false,
        hideIdentifier: true,
        columns: {
            identifier: [0, 'id'],
            editable: [[1, 'name'], [2, 'position'], [3, 'email'], [4, 'phone']]
        }
    });
});
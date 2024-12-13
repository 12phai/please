document.getElementById('find-route-btn').addEventListener('click', function() {
    const startLocation = document.getElementById('start-input').value;
    const endLocation = document.getElementById('end-input').value;

    // Validate if start and end locations are provided
    if (startLocation && endLocation) {
        // Redirect to the corresponding route page based on end location
        if(startLocation == "Gate-5"){
        switch (endLocation) {

            case 'A-BLOCK':
                window.location.href = 'assets/images/Gate5 to A-BLOCK.html';
                break;
            case 'B-BLOCK':
                window.location.href = 'assets/images/Gate5 to B-BLOCK.html';
                break;
            case 'C-BLOCK':
                window.location.href = 'assets/images/Gate5 to C-BLOCK.html';
                break;
            case 'D-BLOCK':
                window.location.href = 'assets/images/Gate5 to D-BLOCK.html';
                break;
            case 'Basketball_Court':
                window.location.href = 'assets/images/Gate5 to Basketball_court.html';
                break;
            case 'Boys-Hostel':
                window.location.href = 'assets/images/Gate5 to Boys-Hostel.html';
                break;
            case 'Canteen':
                window.location.href = 'assets/images/Gate5 to Canteen.html';
                break;
            case 'Parking':
                window.location.href = 'assets/images/Gate5 to Parking.html';
                break;
            case 'Playground':
                window.location.href = 'assets/images/Gate5 to playground.html';
                break;
            case 'Girls-Hostel':
                window.location.href = 'assets/images/Gate5 to Girls-Hostel.html';
                break;
            case 'Sports-Room':
                window.location.href = 'assets/images/Gate5 to Sports-Room.html';
                break;
            case 'Gate-3':
                window.location.href = 'assets/images/Gate5 to Gate3.html';
                break;
            case 'Hut':
                window.location.href = 'assets/images/Gate5 to Hut.html';
                break;
            case 'Hot and Cool':
                window.location.href = 'assets/images/Gate5 to Hot and Cool.html';
                break;
            case 'Upahar':
                window.location.href = 'assets/images/Gate5 to Upahar.html';
                break;
            default:
                alert('Route information not available for the selected end location.');
        }
    }
    else if(startLocation == "Gate-3"){
        switch (endLocation) {

            case 'A-BLOCK':
                window.location.href = 'assets/images/Gate3 to A-BLOCK.html';
                break;
            case 'B-BLOCK':
                window.location.href = 'assets/images/Gate3 to B-BLOCK.html';
                break;
            case 'C-BLOCK':
                window.location.href = 'assets/images/Gate3 to C-BLOCK.html';
                break;
            case 'D-BLOCK':
                window.location.href = 'assets/images/Gate3 to D-BLOCK.html';
                break;
            case 'Boys-Hostel':
                window.location.href = 'assets/images/Gate3 to Boys-Hostel.html';
                break;
            case 'Canteen':
                window.location.href = 'assets/images/Gate3 to Canteen.html';
                break;
            case 'Parking':
                window.location.href = 'assets/images/Gate3 to Parking.html';
                break;
            case 'Hot and Cool':
                window.location.href = 'assets/images/Gate3 to Hot and Cool.html';
                break;
            case 'Upahar':
                window.location.href = 'assets/images/Gate3 to Upahar.html';
                break;
            case 'Girls-Hostel':
                window.location.href = 'assets/images/Gate3 to Girls-Hostel.html';
                break;
            case 'Hut':
                window.location.href = 'assets/images/Gate3 to Hut.html';
                break;
            case 'Sports-Room':
                window.location.href = 'assets/images/Gate3 to Sports-Room.html';
                break;
            case 'Playground':
                window.location.href = 'assets/images/Gate3 to playground.html';
                break;
            case 'Basketball_Court':
                window.location.href = 'assets/images/Gate3 to Basketball_Court.html';
                break;
            case 'Gate-5':
                window.location.href = 'assets/images/Gate3 to Gate5.html';
                break;
            default:
                alert('Route information not available for the selected end location.');
        }
    }
    } else {
        alert('Please enter both start and end locations.');
    }
});

// Autocomplete functionality for start and end input boxes
const locations = [
    'A-BLOCK', 'B-BLOCK', 'C-BLOCK', 'D-BLOCK', 'Boys-Hostel',
      'Canteen', 'Parking','Hot and Cool','Upahar','Girls-Hostel','Playground','Gate-5','Gate-2','Basketball_Court','Hut','Sports-Room'
]; // Add your locations here
// Rest of the autocomplete code remains the same
function autocomplete(input, locations) {
    let currentFocus;

    input.addEventListener('input', function(e) {
        const value = this.value;
        closeAllLists();
        if (!value) return false;

        currentFocus = -1;
        const suggestions = locations.filter(location => location.toLowerCase().includes(value.toLowerCase()));

        const listContainer = document.createElement('div');
        listContainer.setAttribute('id', `${this.id}-autocomplete-list`);
        listContainer.setAttribute('class', 'autocomplete-items');

        this.parentNode.appendChild(listContainer);

        suggestions.forEach((suggestion, index) => {
            const suggestionItem = document.createElement('div');
            suggestionItem.innerHTML = `<strong>${suggestion.substr(0, value.length)}</strong>${suggestion.substr(value.length)}`;
            suggestionItem.addEventListener('click', function() {
                input.value = this.innerText;
                closeAllLists();
            });

            listContainer.appendChild(suggestionItem);
        });
    });

    input.addEventListener('keydown', function(e) {
        const listContainer = document.getElementById(`${this.id}-autocomplete-list`);
        const suggestionItems = listContainer ? listContainer.getElementsByClassName('autocomplete-item') : [];

        if (e.keyCode === 40) {
            currentFocus++;
            addActive(suggestionItems);
        } else if (e.keyCode === 38) {
            currentFocus--;
            addActive(suggestionItems);
        } else if (e.keyCode === 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (suggestionItems) suggestionItems[currentFocus].click();
            }
        }
    });

    function addActive(suggestionItems) {
        if (!suggestionItems) return false;
        removeActive(suggestionItems);
        if (currentFocus >= suggestionItems.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = suggestionItems.length - 1;
        suggestionItems[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(suggestionItems) {
        for (let i = 0; i < suggestionItems.length; i++) {
            suggestionItems[i].classList.remove('autocomplete-active');
        }
    }

    function closeAllLists(elmnt) {
        const suggestionItems = document.getElementsByClassName('autocomplete-items');
        for (let i = 0; i < suggestionItems.length; i++) {
            if (elmnt !== suggestionItems[i] && elmnt !== input) {
                suggestionItems[i].parentNode.removeChild(suggestionItems[i]);
            }
        }
    }

    document.addEventListener('click', function(e) {
        closeAllLists(e.target);
    });
}

// Apply autocomplete to start and end input boxes
autocomplete(document.getElementById('start-input'), locations);
autocomplete(document.getElementById('end-input'), locations);

let restuarant = {
    name: 'ABS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

//seatParty
//removeParty

restuarant.seatParty(75)
console.log(restuarant.checkAvailability(4))
restuarant.removeParty(6)
console.log(restuarant.checkAvailability(2))
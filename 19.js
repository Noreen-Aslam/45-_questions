// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Define the original guest list
var originalGuestList = [
    "Ania",
    "Maya",
    "Eurm",
];
// Function to generate dinner invitations
function generateInvitations(guests) {
    return guests.map(function (guest) { return "Dear ".concat(guest, ", you are invited to dinner!"); });
}
// Invite guests
var originalInvitations = generateInvitations(originalGuestList);
// Print original invitations
originalInvitations.forEach(function (invitation) { return console.log(invitation); });
// Inform about the number of people invited to dinner
console.log("We are inviting ".concat(originalGuestList.length, " people to dinner."));

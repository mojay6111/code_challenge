function calculateAge(birthdate) {
    // Parse the birthdate
    const [birthYear, birthMonth, birthDay] = birthdate.split('-').map(Number);

    // Set target date
    const targetYear = 2025;
    const targetMonth = 11; // November
    const targetDay = 27;

    // Base age difference
    let age = targetYear - birthYear;

    // Check if birthday has already occurred in 2025
    if (birthMonth > targetMonth || (birthMonth === targetMonth && birthDay > targetDay)) {
        age -= 1; // Birthday has not happened yet
    }

    return age;
}

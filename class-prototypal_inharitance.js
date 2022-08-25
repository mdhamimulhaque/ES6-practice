// -------> common class <---------
class CommonInfo {
    name;
    address;
    time;
    constructor(xName, xAddress, hour) {
        this.name = xName;
        this.address = xAddress;
        this.time = hour;
    }
    workingHour() {
        console.log(`Daily ${this.time}`)
    }
}

//----------> extend with common info class

class StudentsInfo extends CommonInfo {
    subject;
    constructor(name, address, hour, subject) {
        super(name, address, hour); //---> passing value to the common class
        this.subject = subject;
    }
    class = 'honours 3rd yr'
    start(time) {
        console.log(`start time ${time}`)
    }

}

class TeamInfo extends CommonInfo {
    profession;
    constructor(name, address, time, profession) {
        super(name, address, time); //---> passing value to the common class
        this.profession = profession
    }
    start(time) {
        console.log(`start time ${time}`)
    }
}

class FriendsInfo extends CommonInfo {
    aim;
    constructor(name, address, time, aim) {
        super(name, address, time); //---> passing value to the common class
        this.aim = aim
    }
    start(time) {
        console.log(`start time ${time}`)
    }
}


const common = new CommonInfo('Himel', 'Narail', 20);
const student = new StudentsInfo('Asif', 'Jashore', 20, 'zoology');

const team = new TeamInfo("Bappy", 'Khulna', 15, 'cricketer')
const friends = new FriendsInfo('Rownok Emon', "Narail Sadar", 8, 'fashion designer')
friends.start('12:00 pm')
console.log(friends)
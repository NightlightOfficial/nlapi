/* 

Public Nightlight API 2.0 by iTenerai 
Version: 0.0.1 (Public Release)

Thank you for using NLAPI! <3

*/

export class NIGHTLIGHTAPI {

    constructor(login, password) {
        this.login = login;
        this.password = password;
    }


    getUser(username){
        return new NIGHTLIGHTUSER(username, this.login, this.password);
    }

    getClub(username){
        return new NIGHTLIGHTCLUB(username, this.login, this.password);
    }
}

class NIGHTLIGHTUSER {

    constructor(username, login, password) {
        this.login = login;
        this.password = password;
        this.username = username;
    }

    async getAll() {
        return fetch("https://night-light.cz/nlapi/nlapi2.php?login=" + this.login + "&password=" +
            this.password + "&getUser=" + this.username).then(async (response) => {
            return response.json().then((data) => {
                return data;
            }).catch((err) => {
                console.log(err);
            })
        });
    }

    async getDisplayName() {
        return this.getAll().then((data) => {
            return data['displayname'];
        });
    }

    async getBio() {
        return this.getAll().then((data) => {
            return data['bio'];
        });
    }

    async getLevel() {
        return this.getAll().then((data) => {
            return data['level'];
        });
    }

    async getXp() {
        return this.getAll().then((data) => {
            return data['xp'];
        });
    }

    async getTotalPostsUploaded() {
        return this.getAll().then((data) => {
            return data['totalpostsuploaded'];
        });
    }
}

class NIGHTLIGHTCLUB {

    constructor(clubname, login, password) {
        this.login = login;
        this.password = password;
        this.clubname = clubname;
    }

    async getAll() {
        return fetch("https://night-light.cz/nlapi/nlapi2.php?login=" + this.login + "&password=" +
            this.password + "&getClub=" + this.clubname).then(async (response) => {
            return response.json().then((data) => {
                return data;
            }).catch((err) => {
                console.log(err);
            })
        });
    }

    async getOwner() {
        return this.getAll().then((data) => {
            return data['owner'];
        });
    }

    async getFollowers() {
        return this.getAll().then((data) => {
            return data['followers'];
        });
    }

    async getMembers() {
        return this.getAll().then((data) => {
            return data['members'];
        });
    }

    async getBio() {
        return this.getAll().then((data) => {
            return data['bio'];
        });
    }

    async getTotalPostsUploaded() {
        return this.getAll().then((data) => {
            return data['totalpostsuploaded'];
        });
    }
}

function getNLAPI(login, password) {
    return new NIGHTLIGHTAPI(login, password);
}

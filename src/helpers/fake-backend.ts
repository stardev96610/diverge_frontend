import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

type UserData = {
    id: number;
    email?: string;
    avatar?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
};

var mock = new MockAdapter(axios);

export function configureFakeBackend() {
    let users: UserData[] = [
        {
            id: 1,
            email: 'prompt@coderthemes.com',
            username: 'test',
            password: 'test',
            firstName: 'Patricia',
            lastName: 'Hess',
            role: 'Admin',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI',
        },
    ];

    mock.onPost('/login/').reply(function (config:any) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // get parameters from post request
                let params = JSON.parse(config.data);

                // find if any user matches login credentials
                let filteredUsers = users.filter((user) => {
                    return user.email === params.email && user.password === params.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return user details and fake jwt token
                    let user = filteredUsers[0];
                    resolve([200, user]);
                } else {
                    // else return error
                    resolve([401, { message: 'Username or password is incorrect' }]);
                }
            }, 1000);
        });
    });
}

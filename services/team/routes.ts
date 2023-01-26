const BASE_URL: string = 'team/api';

export default {
    'GET /': `${BASE_URL}/get.team`,
    'POST /': `${BASE_URL}/create.team`,
    'POST /player': `${BASE_URL}/create.player`,
}
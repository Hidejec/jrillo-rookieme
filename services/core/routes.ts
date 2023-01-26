const BASE_URL: string = 'api';

export default {
    'GET /{teamId}': `${BASE_URL}/get.team`,
    'GET /{teamId}/players': `${BASE_URL}/get.teamPlayers`,
    'POST /': `${BASE_URL}/create.team`,
    'POST /{teamId}/player': `${BASE_URL}/create.player`,
}
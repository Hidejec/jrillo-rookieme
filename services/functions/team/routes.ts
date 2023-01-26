const BASE_URL: string = 'team/api';

export default {
    'GET /': `functions/${BASE_URL}/get.team`,
    'POST /': `functions/${BASE_URL}/create.team`,
    'POST /player': `functions/${BASE_URL}/create.player`,
}
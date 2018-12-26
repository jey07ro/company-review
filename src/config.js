export const headers = {
    'X-HITTA-DEVICE-NAME': 'MOBILE_WEB',
    'X-HITTA-SHARED-IDENTIFIER': 15188693697264027,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

export const domain = 'test.hitta.se';

export const company = {
  'id': 'VdgWZZ___C',
  'displayName': 'hitta.se',
};

export const reviews = [
    {
      'score': 4,
      'company': {
        'id': 'VdgWZX___C',
        'displayName': 'hitta.se',          
      },
      'comment': 'Liked it very much - probably one of the best thai restaurants in the city - recommended!',
      'userName': 'Anonym',
      'createdTime': 1545832592,
    },{
      'score': 3,
      'company': {
        'id': 'VdgWZX___C',
        'displayName': 'hitta.se',          
      },
      'comment': 'Maybe a bit too fast food. I personally dislike that. Good otherweis.',
      'userName': 'Jenny Svensson',
      'createdTime': 1545842592,
    }, {
      'score': 5,
      'company': {
        'id': 'VdgWZW___C',
        'displayName': 'yelp.com',          
      },
      'comment': 'Super good! Love the food!',
      'userName': 'happy56',
      'createdTime': 1545852592,
    },
  ];

export const scoreMapper = {
  NaN : '',
  0: '',
  1: 'I hated it!',
  2: 'I didn’t like it!',
  3: 'It was OK!',
  4: 'I liked it!',
  5: 'I loved it!',
};

export const initComment = {
  comment: '',
  userName: 'Anonymous',
  createdTime: NaN,
  company,
  score: NaN,
};
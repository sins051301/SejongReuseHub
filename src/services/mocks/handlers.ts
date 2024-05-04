import { http, HttpResponse } from 'msw';
import { postItemType, postArray } from './postItem';
import { markers } from './marker';

export const handlers = [
  http.get('/hello', () => {
    console.log('msw:get :: /hello');
    return HttpResponse.json({
      data: 'Captured a "GET /hello" request',
    });
  }),

  http.get('/post', async () => {
    const retItem = postArray;
    console.log(retItem);

    return HttpResponse.json(retItem);
  }),

  http.get('/post/:id', async ({ params }) => {
    const { id } = params;
    const retItem: postItemType | undefined = postArray.find(
      (postItem) => postItem.postId === +id,
    );

    console.log(retItem);

    return HttpResponse.json(retItem);
  }),

  http.post('/post', async ({ request }) => {
    const data = await request.formData();
    console.log(data);
    const len = postArray.length;
    const newPost = {
      postId: len + 1,
      postTitle: data.get('title') || '',
      postContnet: data.get('content') || '',
    };
    const tmpArray = [...postArray, newPost];
    console.log(tmpArray);
  }),

  http.get('/markers', async () => {
    return HttpResponse.json(markers);
  }),
];

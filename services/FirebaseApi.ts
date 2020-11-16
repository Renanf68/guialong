export const ApiUrl = `https://firestore.googleapis.com/v1/projects/guialong/databases/(default)/documents/homes`
export const fetcher = (url: string) => fetch(url).then((r) => r.json())
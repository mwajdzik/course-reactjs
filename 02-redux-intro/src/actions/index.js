// action creator - a function
// action - a returned object

export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

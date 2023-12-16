using my.bookshop as my from '../db/data-model';

@requires: 'authenticated-user'
service AdminService {
    @readonly entity Books as projection on my.Books;
}

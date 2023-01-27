export class Paginator {
  pageSelected: number;
  rowsPerPage: number;
  constructor(pageSelected: number, rowsPerPage: number) {
    this.pageSelected = pageSelected;
    this.rowsPerPage = rowsPerPage;
  }
}

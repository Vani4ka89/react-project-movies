export interface IPagination<T> {
    id: number;
    page: number;
    total_pages: number;
    total_results: number;
    results: T;
}
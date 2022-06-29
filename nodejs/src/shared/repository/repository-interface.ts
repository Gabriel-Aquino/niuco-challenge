export default interface RepositoryInterface<T>{
  find(): Promise<T[]>
}

///code
export const backendCode = `@PostMapping("/search")
public ResponseEntity<PageResult<Item>> search(@RequestBody SearchParam param) {

    // 1. 필수값 검증
    if (param.getFilters() == null || param.getFilters().isEmpty()) {
        throw new CustomException("INVALID_SEARCH");
    }

    // 2. 페이징 계산
    int offset = (param.getPage() - 1) * param.getSize();
    param.setOffset(offset);
    param.setLimit(param.getSize());

    // 3. 데이터 조회
    List<Item> items = itemService.findList(param);

    // 4. 응답 구성
    PageResult<Item> result = new PageResult<>();
    result.setList(items);
    result.setPage(param.getPage());
    result.setSize(param.getSize());

    return ResponseEntity.ok(result);
}`;

export const frontendCode = `//ApiService
class ApiService {
  fetchList = (param: SearchParam) =>
    axiosInstance.post<PageResult<Item>>("/search", param);
}

export const apiService = new ApiService();

//React Query Hook
export const useFetchList = (param: SearchParam, options?) =>
  useQuery(
    ["list", param],
    () => apiService.fetchList(param),
    {
      ...options,
    }
  );

//데이터 검색
const { data, isLoading } = useFetchList(searchParam, {
  enabled: isReady,
  onSuccess: (res) => {
    const newItems = res.data.list || [];

    setList((prev) =>
      searchParam.page === 1
        ? newItems
        : [...prev, ...newItems]
    );
  },
});

//AgGrid
<AgGridReact
  rowData={list}
  columnDefs={columns}
  rowSelection="single"
/>
`;

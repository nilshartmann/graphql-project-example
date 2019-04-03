package nh.graphql.tasks.graphql;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class PageResult {

    private final int page;
    private final long totalCount;
    private final int totalPageCount;
    private final boolean hasNextPage;
    private final boolean hasPreviousPage;

    public PageResult(int page, long totalCount, int totalPageCount, boolean hasNextPage, boolean hasPreviousPage) {
        this.page = page;
        this.totalCount = totalCount;
        this.totalPageCount = totalPageCount;
        this.hasNextPage = hasNextPage;
        this.hasPreviousPage = hasPreviousPage;
    }

    @Override
    public String toString() {
        return "PageResult{" +
            "page=" + page +
            ", totalCount=" + totalCount +
            ", totalPageCount=" + totalPageCount +
            ", hasNextPage=" + hasNextPage +
            ", hasPreviousPage=" + hasPreviousPage +
            '}';
    }

    public int getPage() {
        return page;
    }

    public long getTotalCount() {
        return totalCount;
    }

    public int getTotalPageCount() {
        return totalPageCount;
    }

    public boolean isHasNextPage() {
        return hasNextPage;
    }

    public boolean isHasPreviousPage() {
        return hasPreviousPage;
    }
}

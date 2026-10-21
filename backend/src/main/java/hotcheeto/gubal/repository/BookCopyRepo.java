package hotcheeto.gubal.repository;

import hotcheeto.gubal.entity.BookCopy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookCopyRepo extends JpaRepository<BookCopy, Long> {

}

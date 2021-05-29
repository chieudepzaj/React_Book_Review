import { Fragment } from "react";
import Book from "./Book";

import BookImg1 from "../../assets/books/book1.png";
import BookImg2 from "../../assets/books/book2.png";
import BookImg3 from "../../assets/books/book3.png";
import BookImg4 from "../../assets/books/book4.png";
import BookImg5 from "../../assets/books/book5.png";
import BookImg6 from "../../assets/books/book6.png";
import BookImg7 from "../../assets/books/book7.png";
import BookImg8 from "../../assets/books/book8.png";
import BookImg9 from "../../assets/books/book9.png";

const DUMMY_BOOKLISTS = [
  {
    title: "Thần Đồng Đất Việt",
    author: "Lê Linh",
    bookImg: BookImg1,
    desciption: `Truyện lấy bối cảnh là thời Hậu Lê, nhưng những sự kiện xảy ra trong truyện không trùng lặp với những sự kiện xảy ra trên thực tế. Tuy vậy, hầu hết những sự kiện chính xảy ra trong Thần Đồng Đất Việt đều dựa trên những câu truyện, điển tích lịch sử có thật của Việt Nam. Tác phẩm này kể lại những câu chuyện về cuộc đời của Lê Tí, một Trạng nguyên của Đại Việt cùng với những người bạn thân của cậu là Sửu Ẹo, Dần Béo và Cả Mẹo. Sự ra đời của Trạng Tí cũng không bình thường. Kiếp trước cậu vốn là một bậc thần tiên có kiến thức uyên bác trên Thiên Đình, sau đó được đầu thai xuống trần gian để giúp đỡ Đại Việt. Mẹ của Tí là bà Hai hậu, sau khi đi cày về mệt mỏi đã ngồi lên một hòn đá để nghỉ ngơi và có mang rồi sau đó sinh ra cậu (và đây chỉ là lý thuyết cũng chưa ai minh chứng được sự thât).
Từ nhỏ, Tí đã thể hiện mình là một người con hiếu thảo, ham học và có trí thông minh hơn người. Ngay cả Đồ Kiết, thầy dạy của cậu cũng phải ngạc nhiên về kiến thức của cậu. Ở làng Phan Thị, với tài trí của mình, cậu cũng đã giúp mẹ, các bạn của mình và những người dân trong làng giải quyết nhiều vấn đề khó khăn. Vượt qua ba kì thi Hương, Hội, Đình một cách xuất sắc, cậu trở thành trạng nguyên nhỏ tuổi nhất của Đại Việt. Sau đó, cậu cũng được Đại Minh công nhận là Lưỡng Quốc Trạng nguyên.
Tí cùng Sửu, Dần và Cả Mẹo cũng đã có công lớn trong việc phò trợ vua Lê chống lại sự xâm lược của Đại Minh và đối phó với các sứ thần mà Đại Minh cử sang. Trong triều đình, cậu là một vị quan thanh liêm chính trực nên được công chúa Phương Thìn yêu mến, nhưng cũng chính vì vậy mà cậu luôn bị Tể Tướng Tào Hống và những người trong gia đình là hai đứa con ông coi là cái gai trong mắt và tìm mọi cách để hạ nhục cậu, tuy nhiên trong phần lớn các câu chuyện cậu là người chiến thắng. Cũng nhờ tài trí vượt bậc, Trạng Tí được vua tin tưởng giao trọng trách đi sứ Bắc Quốc nhiều lần. Ở đó, Tí cũng gặp phải nhiều khó khăn do vua Bắc Quốc và Vương Thừa Tướng tạo ra nhằm ám hại cậu và làm tổn hại uy tín Đại Việt, thậm chí có lần suýt chút nữa thì cậu thiệt mạng. Tuy đã ra làm quan nhưng đôi lúc cậu vẫn được vua cho phép về quê để chăm sóc mẹ và giúp đỡ dân làng. Và tất nhiên, tài trí và sự giúp đỡ nhiệt tình từ những người bạn tốt đã giúp những người dân rất nhiều.ร็จได้อย่างแน่นอน!!`,
    score: 4.36,
  },
  {
    title: "ขุมทรัพย์สุดปลายฝัน",
    author: "Paulo Coelho",
    bookImg: BookImg2,
    desciption: `นวนิยายชื่อดังของ Paulo Coelho ว่าด้วยการเดินทางของหนุ่มเลี้ยงแกะ ที่ปรารถนาจะตามหาขุมทรัพย์ที่อยู่ที่พีระมิดในอียิปต์`,
    score: 3.88,
  },
  {
    title: "คาฟกา วิฬาร์ นาคาตะ",
    author: "Huraki Murakami",
    bookImg: BookImg3,
    desciption: `เด็กอายุสิบห้าปีหนีออกจากบ้าน เรื่องธรรมดาสามัญที่จะเกิดขึ้นเมื่อบรรยากาศในบ้านอึดอัดขัดข้องจนยากจะทนทานความธรรมดาสามัญจบลงเพียงเท่านี้.... `,
    score: 4.13,
  },
  {
    title: "Thank You for Coming to My TED Talk",
    author: "Chris Anderson, Lorin Oberweger",
    bookImg: BookImg4,
    desciption: `ทุกวันนี้เราอยู่ในโลกที่พลังแห่งการ “พูด” สร้างแรงสั่นสะเทือนได้อย่างมหาศาล และ “เสียง” ของคนรุ่นใหม่ส่งไปได้ไกลอย่างที่ไม่เคยเป็นมาก่อน ไม่ว่าจะเป็นการนำเสนอหน้าชั้นเรียน แข่งขันโต้วาที อัดพอดแคสต์ หรือถ่ายคลิปออนไลน์ที่เผยแพร่สู่ผู้ชมนับล้าน ล้วนมีโอกาสเปลี่ยนความคิดผู้คนหรือกระทั่งเปลี่ยนโลก และทั้งหมดนี้เกิดขึ้นได้ด้วย “การนำเสนออย่างทรงพลัง”`,
    score: 4.03,
  },
  {
    title: "TED Talks: The Official TED Guide to Public Speaking",
    author: "Chris Anderson",
    bookImg: BookImg5,
    desciption: `TED คือชื่อของเวทีที่สร้างแรงบันดาลใจให้ผู้คนทั่วโลก และกลายเป็นปรากฏการณ์ซึ่งพลิกโฉมการพูดในที่สาธารณะไปอย่างสิ้นเชิง ทว่าอะไรคือเบื้องหลังความสำเร็จของ TED? เพราะเหตุใดนักสร้างสรรค์จากทั่วทุกวงการจึงกล่าวปาฐกถาได้อย่างน่าทึ่งตรึงใจถึงเพียงนี้? มีสูตรสำเร็จแบบใดหรือเปล่าที่ทำให้ TED Talk กระทบใจผู้คนทั่วโลก? แล้วคุณเองจะสามารถนำเสนอความคิดอย่างทรงพลังเช่นนี้ได้บ้างหรือไม่? `,
    score: 4.09,
  },
  {
    title: "ขอให้แมวโอบกอดคุณ",
    author: "Kiyoshi Shigematsu",
    bookImg: BookImg6,
    desciption: `“แบล็งเก็ตแคตส์” หากแปลตรงตัวคือ “แมวผ้าห่ม” เป็นบริการแมวเช่าพร้อมผ้าห่มคู่ใจ สามารถเช่าไปเลี้ยงเป็นเวลาสามวันสองคืน โดยมีกฎว่า “ห้ามเช่าแมวตัวเดิมภายในระยะเวลาสามเดือน”`,
    score: 3.64,
  },
  {
    title: "โจนาธาน ลิฟวิงสตัน นางนวล",
    author: "Richard Bach",
    bookImg: BookImg7,
    desciption: `วรรณกรรมคลาสสิกชิ้นสำคัญที่โลกรักและยกย่อง จิตวิญญาณแห่งนางนวลโจนาธานเป็นแรงบันดาลใจอันแสนบรรเจิดแด่ผู้คนรุ่นแล้วรุ่นเล่าให้หาญกล้าที่จะตั้งคำถามต่อขนบ จารีต กฎเกณฑ์ต่างๆ ของสังคมที่ตีตรวนรั้งจิตวิญญาณไว้ และแต้มเติมหัวใจให้ใฝ่เสรีมากพอจะโบยบินบนวิถีขบถ นิยายเรื่องนี้สะท้อนภาวะเชิงปรัชญาผ่านนกนางนวลที่โบยบินออกจากกรอบเพื่อแสวงหาวิถีของตนอย่างอิสระและงดงาม`,
    score: 3.85,
  },
  {
    title: "เซเปียนส์: ประวัติย่อมนุษยชาติ",
    author: "Yuval Noah Harari",
    bookImg: BookImg8,
    desciption: `หนังสือเล่มนี้บอกเล่าเรื่องราวอันโลดโผนของประวัติศาสตร์ที่แสนพิเศษของพวกเราเอง นับตั้งแต่เมื่อครั้งยังเป็นลิงไร้หางที่ไม่สลักสำคัญใด จนกลายเป็นเจ้าผู้ครอบครองโลก หนังสือเบสต์เซลเลอร์ “เซเปียนส์ ประวัติย่อมนุษยชาติ” ของยูวัล โนอาห์ แฮรารี น่าสนใจอย่างไร?`,
    score: 4.4,
  },
  {
    title:
      "ขุนศึก ศักดินา และพญาอินทรี การเมืองไทยภายใต้ระเบียบโลกของสหรัฐอเมริกา 2491-2500",
    author: "ณัฐพล ใจจริง",
    bookImg: BookImg9,
    desciption: `หนังสือเล่มนี้เกิดขึ้นจากความสนใจประวัติศาสตร์การปฏิวัติ 2475 และขบวนการปฏิปักษ์ปฏิวัติของผู้เขียนรวมถึงการที่ผู้เขียนมีโอกาสฝึกฝนและศึกษาหาความรู้เพิ่มเติมภายใต้บรรยากาศการ "เกิดใหม่" ของคณะราษฎรภายหลังการรัฐประการ 19 กันยายน 2549 โดยเฉพาะบทบาททางการเมืองของจอมพล ป.พิบูลสงคราม`,
    score: 4.71,
  },
];

const BooksPreview = (props) => {
  const createBookLists = DUMMY_BOOKLISTS.map((book) => (
    <Book
      key={Math.random().toString()}
      title={book.title}
      author={book.author}
      bookImg={book.bookImg}
      //   desciption={book.desciption}
      score={book.score}
    />
  ));

  return <Fragment>{createBookLists}</Fragment>;
};

export default BooksPreview;

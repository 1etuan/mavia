import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MultiActionAreaCard, FeaturedPost } from '@/components/card'


const cards = [
  {
    title: "Chất lượng trên mọi thứ",
    description: "Chúng tôi tin rằng tập trung vào các chi tiết là những gì ngăn cách các trò chơi mang tính biểu tượng với cơ bản."
  },
  {
    title: "Kinh tế cân bằng",
    description: "Trò chơi của chúng tôi được xây dựng để có thể mở rộng quy mô đến một số lượng lớn người dùng, cả về mặt kỹ thuật và kinh tế."
  },
  {
    title: "Nền tảng chéo",
    description: "Trò chơi của chúng tôi được xây dựng để chơi trên cả web máy tính để bàn và thiết bị di động, mang lại trải nghiệm chơi game thực sự phổ quát."
  },
  {
    title: "Cộng đồng thuộc sở hữu",
    description: "Cấu trúc của cơ chế trò chơi của chúng tôi tập trung xung quanh người chơi, trao quyền kiểm soát cho cộng đồng."
  },

]

const posts = [
  {
    id: 1,
    description: "Tất cả nội dung trò chơi của chúng tôi được thiết kế và phát triển từ đầu, từ thiết kế khái niệm đến mô hình nhân vật 3D và hình ảnh động.",
    image: "https://skrice.com/home/info-1.jpg",
    imageLabel: "string",
    title: "Thiết kế và phát triển trò chơi hạng nhất"
  },
  {
    id: 2,
    description: "Nhóm phát triển của chúng tôi không chỉ đầu tư tài nguyên vào các trò chơi của chúng tôi mà còn xây dựng cơ sở hạ tầng dài hạn cho các trò chơi dựa trên Blockchain khác.",
    image: "https://skrice.com/home/info-2.jpg",
    imageLabel: "string",
    title: "Cơ sở hạ tầng kỹ thuật cho các khả năng vô hạn"
  },
  {
    id: 3,
    description: "Các trò chơi của chúng tôi sử dụng các mô hình kinh tế mà chúng tôi xử lý và thử nghiệm bằng cách sử dụng hàng trăm mô phỏng, đảm bảo khả năng phục hồi và cân bằng của tất cả các lĩnh vực của hệ sinh thái.",
    image: "https://skrice.com/home/info-3.jpg",
    imageLabel: "string",
    title: "Cách tiếp cận khoa học đối với kinh tế học trong trò chơi"
  }
]


export default function HomePage() {
  return (
    <>
      <div className='overflow-hidden xyz'>
        <div className='relative flex items-center justify-center'>
          <div className='absolute abc'>
            <img src="https://skrice.com/vn/home/teaser.jpg" alt="" />
          </div>
          <div className='absolute top-[150px] left-[200px]'>
            <div className='font-bold text-3xl text-white'>Chúng tôi tạo ra các trò chơi Blockchain gây rối</div>
            <div>Skrice là một studio thiết kế và phát triển trò chơi với sứ mệnh mang lại việc áp dụng hàng loạt công nghệ blockchain thông qua các thế giới kỹ thuật số do người chơi sở hữu.</div>
          </div>
        </div>
      </div>

      <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 6, pb: 10 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Trải nghiệm tương lai của game
        </Typography>
        <Typography variant="h5" fontSize={22} align="center" component="p">
          Chúng tôi xây dựng trò chơi dựa trên các giá trị cơ bản mà chúng tôi tin rằng xác định thế hệ tiếp theo của trò chơi.
        </Typography>
      </Container>

      <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 6, pb: 10 }}>
        <Grid spacing={4}>
          {cards.map((card, index) => <MultiActionAreaCard key={index} title={card.title} description={card.description} />)}
        </Grid>

        <Grid spacing={4} sx={{ pt: 20 }}>
          {posts.map((post, index) => <FeaturedPost key={index} post={post} />)}
        </Grid>
        <Grid container sx={{ pt: 20, backgroundColor: "black", borderRadius: "10px" }} >

        </Grid>
      </Container>
    </>
  );
}

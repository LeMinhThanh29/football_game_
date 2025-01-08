import { Player_Model } from "../model/Player";

const calculatePlayerRating = (player: Player_Model): number => {
  const { goals, assists, yellowCards, redCards, tackles, shotsOnTarget } =
    player;

  let score = 6; // Điểm cơ bản của mỗi cầu thủ là 6

  // Tăng điểm cho mỗi bàn thắng (1 bàn = +1.0 điểm)
  score += goals * 1.0;

  // Tăng điểm cho mỗi kiến tạo (1 kiến tạo = +0.5 điểm)
  score += assists * 0.5;

  // Tăng điểm cho số pha tắc bóng thành công (mỗi pha = +0.2 điểm, tối đa 1.0 điểm)
  score += Math.min(tackles * 0.2, 1.0);

  // Tăng điểm nếu có nhiều cú sút trúng đích (mỗi cú sút = +0.1 điểm, tối đa 0.5 điểm)
  score += Math.min(shotsOnTarget * 0.1, 0.5);

  // Giảm điểm nếu nhận thẻ vàng (mỗi thẻ = -0.1 điểm)
  score -= yellowCards * 0.1;

  // Giảm mạnh điểm nếu nhận thẻ đỏ (mỗi thẻ = -0.5 điểm)
  score -= redCards * 0.5;

  // Đảm bảo điểm số nằm trong khoảng từ 1.0 đến 10.0
  return Math.min(Math.max(Number(score.toFixed(2)), 1), 10);
};

export { calculatePlayerRating };

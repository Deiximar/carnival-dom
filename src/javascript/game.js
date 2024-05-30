import { Balloon } from 'balloon'
export class Game {
  constructor(level) {
    init(level)
  }

  init(level) {
    this.level = level;
    this.score = 0;
    this.live = 3;
    this.time_limit = set_time_limit(this.level);
    this.ballons = generate_balloons(this.level);
  }

  set_time_limit(level) {
    if (level === 'easy') {
      return 60;
    } else if (level === 'medium') {
      return 45;
    } else if (level === 'hard') {
      return 30;
    }
  }

  generate_balloons(level) {
    const balloons = [];

    let speed, size, count;

    if (level == "easy") {
      speed = 8
      size = 3
      count = 10
    } else if (level == "medium") {
      speed = 5
      size = 2
      count = 20
    } else if (level == "hard") {
      speed = 3
      size = 1
      count = 30
    }

    for (i == 0; i <= count; i++) {
      balloons.push(new Balloon(speed, size))
    }
    return balloons;
  }

  shoot_balloon(balloon) {
    this.score += balloon.points;
    this.ballons.remove(balloon);
  }

  balloon_missed(balloon) {
    this.lives -= 1
    this.balloons.remove(balloon)
    if (this.lives <= 0) {
      end_game()
    }
  }

  end_game() {
    console.log(`Game Over! Your score: ${self.score}`);
  }

}
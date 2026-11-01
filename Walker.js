class Walker {
  
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = p5.Vector.random2D();
  	this.w = 20;
    this.diz = 15;


  }
  
  move() {
    // 새로운 속도 만들기
    // this.vel = createVector(random..., random..)
    // this.vel = createVector(random(-10, 10), random(-10, 10));
    this.pos.x += this.vel.x * this.diz;
    this.pos.y += this.vel.y * this.diz;
  }
    
    // 새 위치(벡터) = 이전 위치(벡터) + 속도(벡터)
    // this.pos = this.pos + this.vel;
  //   this.pos.add(this.vel);
  //   this.pos.add(v2);
  // }

  
hitWall() {
  let r = this.w / 2;

  // 오른쪽 벽
  if (this.pos.x > width - r) {
    this.pos.x = width - r;
    if (this.vel.x > 0) {
      this.vel.x *= -1;
    }
  }

  // 왼쪽 벽
  if (this.pos.x < r) {
    this.pos.x = r;
    if (this.vel.x < 0) {
      this.vel.x *= -1;
    }
  }

  // 아래쪽 벽
  if (this.pos.y > height - r) {
    this.pos.y = height - r;
    if (this.vel.y > 0) {
      this.vel.y *= -1;
    }
  }

  // 위쪽 벽
  if (this.pos.y < r) {
    this.pos.y = r;
    if (this.vel.y < 0) {
      this.vel.y *= -1;
    }
  }
}

    

  
  show() {
    // circle(this.pos.x, this.pos.y, this.w);
    // point(this.pos.x, this.pos.y);
    // point(this.pos);
    fill(204, 255, 0);
    circle2(this.pos, this.w);
  }
}
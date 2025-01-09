export interface Skill {
  skill_id: number;
  skill_name: string;
  skill_point: number;
}

export const skills: Skill[] = [
  { skill_id: 1, skill_name: "Neymar Rainbow Flick", skill_point: 6 },
  { skill_id: 2, skill_name: "El Tornado", skill_point: 6 },
  { skill_id: 3, skill_name: "Waka Waka", skill_point: 5 },
  { skill_id: 4, skill_name: "Sombrero Flick", skill_point: 5 },
  { skill_id: 5, skill_name: "Okocha Sombrero Flick", skill_point: 4 },
  { skill_id: 6, skill_name: "Bolasie Flick", skill_point: 4 },
  { skill_id: 7, skill_name: "Fake Pass", skill_point: 3 },
  { skill_id: 8, skill_name: "Ball Roll Chop", skill_point: 3 },
  { skill_id: 9, skill_name: "Ball Roll Cut", skill_point: 3 },
  { skill_id: 10, skill_name: "Ball Hop", skill_point: 2 },
  { skill_id: 11, skill_name: "Simple Rainbow", skill_point: 2 },
];

export const random5Skills = () => {
  let top5: Skill[] = [];
  while (top5.length < 5) {
    const randomIndex = Math.floor(Math.random() * skills.length);
    const item = skills[randomIndex];

    const isDuplicate = top5.some((skill) => skill.skill_id === item.skill_id);

    if (!isDuplicate) {
      top5.push(item);
    }
  }
  return top5;
};

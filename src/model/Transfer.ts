export interface TransferData_Props {
  id: number;
  club_logo: string;
  club_name: string;
  date_transfer: number;
}
export interface LIST_TransferData {
  data: TransferData_Props[];
}

const transferData: LIST_TransferData = {
  data: [
    {
      id: 1,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "FC Barcelona",
      date_transfer: 1640995200, // 01-01-2022
    },
    {
      id: 2,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Real Madrid",
      date_transfer: 1622505600, // 01-06-2021
    },
    {
      id: 3,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Manchester United",
      date_transfer: 1609459200, // 01-01-2021
    },
    {
      id: 4,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Juventus",
      date_transfer: 1593561600, // 01-07-2020
    },
    {
      id: 5,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Chelsea",
      date_transfer: 1580515200, // 01-02-2020
    },
    {
      id: 6,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Paris Saint-Germain",
      date_transfer: 1567296000, // 01-09-2019
    },
    {
      id: 7,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Manchester City",
      date_transfer: 1551398400, // 01-03-2019
    },
    {
      id: 8,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Arsenal",
      date_transfer: 1538352000, // 01-10-2018
    },
    {
      id: 9,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Inter Milan",
      date_transfer: 1525123200, // 01-05-2018
    },
    {
      id: 10,
      club_logo:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      club_name: "Bayern Munich",
      date_transfer: 1514764800, // 01-01-2018
    },
  ],
};

export { transferData };

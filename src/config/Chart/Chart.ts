export const getChartOption = (data: number[], flags: string) => {
    return {
      tooltip: {
        trigger: "axis", // Hoạt động trên toàn bộ trục
        axisPointer: {
          type: "line", // Kiểu đường kẻ
          axis: "y", // Chỉ đường kẻ nằm ngang trên trục Y
        },
        formatter: (params: any) => {
          const { name, value } = params[0];
          return `Năm: ${name} <br/> Giá trị: ${value}M`; // Hiển thị giá trị
        },
        backgroundColor: "rgba(50,50,50,0.8)", // Nền tooltip
        textStyle: {
          color: "#ffffff", // Màu chữ tooltip
        },
      },
      grid: {
        top: "15%",
        left: "5%",
        right: "5%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["'10", "'13", "'14", "'16", "'17", "'19", "'20", "'22"], // Nhãn trục X
        axisLine: {
          lineStyle: {
            color: "#ffffff", // Màu trục
          },
        },
        axisLabel: {
          color: "#8d8e92",
          fontSize: 12,
        },
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisLabel: {
          color: "#8d8e92",
          formatter: "{value}M",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.2)", // Đường lưới ngang
            type: "dotted",
          },
        },
      },
      series: [
        {
          name: "Market Value",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            color: "#ffffff", // Màu điểm
            borderColor: "#4a90e2", // Viền điểm
            borderWidth: 2,
          },
          lineStyle: {
            width: 3,
            color: "#4a90e2", // Màu đường
          },
          data: data, // Giá trị
        },
      ],
      graphic: [
        // Thêm các lá cờ ở trên các điểm
        ...["10%", "22%", "34%", "46%", "58%", "70%", "82%"].map((left, index) => ({
          type: "image",
          style: {
            image:
              flags, // URL ảnh cờ
            width: 30,
            height: 20,
          },
          left: left, // Định vị cờ
          top: "5%",
          
        })),
      ],
    };
  };
  
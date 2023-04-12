export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];


export const restaurantColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },

  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];

export const tableColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "tableNumber",
    headerName: "Number",
    width: 100,
  },
  {
    field: "features",
    headerName: "Features",
    width: 100,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 100,
  },
];

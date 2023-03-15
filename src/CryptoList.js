import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard"
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

function CryptoList({ isDarkMode }) {
  const [cryptoData, setCryptoData] = useState([])
  const [cryptoList, setCryptoList] = useState()

  console.log(cryptoData)

  const columns = [
    {
      field: 'image',
      headerName: '',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'symbol',
      headerName: '',
      width: 150,
      editable: true,
    },
    {
      field: 'current_price',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
    {
      field: 'change',
      headerName: 'Change',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  function initFetch() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h")
    .then((response) => response.json())
    .then((data) => setCryptoData(data));
  }
  
  useEffect(() => {
    initFetch()
    setInterval(initFetch, [60000])
  }, [])  

  const cryptoCards = cryptoData.map((cryptoCoin, index) => (
          <CryptoCard 
            key={cryptoCoin.id} 
            cryptoCoin={cryptoCoin} 
            isDarkMode={isDarkMode}
          />
          ))

  return (
    // <div className="container-fluid">
    //     {cryptoCards}
    // </div>


    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={cryptoData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>


  )
};

export default CryptoList;
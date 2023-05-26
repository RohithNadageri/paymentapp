const ListTamlpet=(dataList)=>{
    return(
        <>
         <div className="d-flex justify-content-center ">
        <div class="table-responsive" >
  <table class="table text-center table-striped text-successtable-border border-light">
    <thead>
      <tr>
        <th scope="col" >Transaction Id</th>
        <th scope="col" >Reciver Name</th>
        <th scope="col" >Reciver Mobile No</th>
        <th scope="col" >Transaction Date</th>  
        <th scope="col">Amount</th>
        <th scope="col" className="w-25">Descprition</th>
        
      </tr>
    </thead>
    <tbody>

      {
      dataList.map((list)=>{
        console.log(list);
        return(
        <tr>
        <td>{list.transactionId}</td>
        <td>{list.reciverName}</td>
        <td>{list.reciverMobileNo}</td>
        <td>{list.transactionDate}</td>
        <td>{list.amount}</td>  
        <td>{list.descprition}</td>
       
        
      </tr>
      );
      })
      }

    </tbody>
  </table>
</div>
</div>
        </>
    )
}

export default ListTamlpet;
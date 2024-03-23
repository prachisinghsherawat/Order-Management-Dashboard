import Form from "@/components/id/Form";
import Table from "@/components/id/Table";


export default function OrderDetailsPage(){

    return (
      <>
        <div className="h-screen flex justify-between space-x-8 mt-12">
          <div className="w-2/6">
            <Form />
          </div>
          <div className="w-4/6">
            <Table />
          </div>
        </div>
      </>
    );
}
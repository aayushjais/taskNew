import { Table, AddRowButton, RemoveRowButton, Form, Input, SubmitButton } from "formik-antd"
import { Formik } from "formik"
import * as React from "react"
import { DeleteOutlined } from "@ant-design/icons"

export function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{
          tableData: [
            {
              id: "",
              name: "",
              email: "",
              password:"",
              confirmPassword:"",
              mobile:"",
            },
          ],
        }}
        onSubmit={() => {}}
        
      >
        <Form>
         
          <Table
            name="tableData"
            rowKey={(row, index) => "" + row.id}
            size="default "
            pagination={false}
            style={{ width: 600 }}
            columns={[
              {
                title: "Name",
                key: "name",
                render: (text, record, i) => (
                  <Input
                    // style={{ border: "none" }}
                    name={`tableData.${i}.name`}
                  />
                ),
              },
              {
                title: "Email Id",
                key: "email",
                render: (text, record, i) => (
                  <Input
                    // style={{ border: "none" }}
                    name={`tableData.${i}.email`}
                  />
                ),
              },
              {
                title: "Password",
                key: "password",
                render: (text, record, i) => (
                  <Input.Password
                    // style={{ border: "none" }}
                    name={`tableData.${i}.password`}
                  />
                ),
              },
              {
                title: "Confirm Password",
                key: "confirmPassword",
                render: (text, record, i) => (
                  <Input.Password
                    // style={{ border: "none" }}
                    name={`tableData.${i}.confirmPassword`}
                  />
                ),
              },
              {
                title: "Mobile Number",
                key: "mobile",
                render: (text, record, i) => (
                  <Input
                    // style={{ border: "none" }}
                    name={`tableData.${i}.mobile`}
                  />
                ),
              },
              {
                key: "actions",
                render: (text, record, index) => (
                  <RemoveRowButton
                    style={{ border: "none" }}
                    icon={<DeleteOutlined />}
                    name="tableData"
                    index={index}
                  />
                ),
              },
            ]}
          />
          <br/>
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <AddRowButton
            name="tableData"
            style={{ marginBottom: 12 }}
            createNewRow={() => ({
              id: "" + Math.random(),
              name: "new",
              email: "add",
            })}
          >
            Add
          </AddRowButton>
          <SubmitButton>Submit</SubmitButton>
          </div>
          
        </Form>
      </Formik>
    </div>
  )
}

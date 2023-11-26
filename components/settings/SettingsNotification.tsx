import React from "react";
import { Field, Form, Formik } from "formik";
import { CustomButton } from "../common";

const initialValues = {
  automaticReminder: "No",
  manualReminder: "",
  repeatReminder: "",
};

const SettingsNotification: React.FC = () => {
  return (
    <div>
      <p className="bold-title mb-6">Reminder settings</p>
      <hr />

      <div className="">
        <div className="grid items-center w-full">
          <p className="title py-6">Reminders</p>
        </div>
      </div>

      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ setFieldValue, values }) => {
          const isChecked = values.automaticReminder === "Yes";

          return (
            <Form>
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="automaticReminder"
                    className="border rounded-sm h-[16px] w-[16px]"
                    onChange={() =>
                      setFieldValue("automaticReminder", isChecked ? "" : "Yes")
                    }
                  />
                  <p className="text-neutral-black text-sm">
                    Send automatic reminders
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-neutral-black text-sm">
                    Days before sending first reminder
                  </p>
                  <Field
                    type="number"
                    name="manualReminder"
                    className="w-[52px] h-[35px] border rounded-md"
                    min="1"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-neutral-black text-sm">
                    Days to repeat reminder
                  </p>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Field
                      as="select"
                      name="industry"
                      className="border rounded-lg h-10 px-4 w-[180px]"
                      placeholder="Select industry"
                    >
                      <option value="Don’t repeat">Don’t repeat</option>
                      <option value="Everyday">Everyday</option>
                      <option value="Every 2 days">Every 2 days</option>
                      <option value="Every 5 days">Every 5 days</option>
                      <option value="Every 7 days">Every 7 days</option>
                    </Field>
                  </div>
                </div>
              </div>
              <CustomButton type="submit" className="mt-8">
                Save changes
              </CustomButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SettingsNotification;

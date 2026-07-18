import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import TableBlock from "@/components/tutorials/TableBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import BestPractice from "@/components/tutorials/BestPractice";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import CheatSheet from "@/components/tutorials/CheatSheet";
import ParameterTable from "@/components/tutorials/ParameterTable";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";

export default function Page() {
  return (
    <TutorialLayout
      title="Date & Time Functions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="45 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/date-time-functions.webp"
        alt="Date Functions in ABAP CDS View Entity"
        caption="Master built-in DATS functions for date validation, date calculations, and business period processing in SAP S/4HANA Public Cloud."
      />

      <ContentSection title="Introduction">
        <p>
          Almost every SAP application works with dates. Whether you're
          calculating payment due dates, delivery schedules, contract periods,
          warranty expiration dates, or reporting lead times, date arithmetic is
          part of everyday ABAP Cloud development.
        </p>

        <p>
          ABAP CDS provides a small but powerful set of built-in date functions
          that execute directly in SAP HANA, allowing calculations to be
          performed without transferring data to the ABAP application server.
        </p>

        <p>
          Although there are only four dedicated DATS functions, understanding
          when to use each one—and how they behave—is essential for building
          production-ready CDS View Entities.
        </p>
      </ContentSection>

      <ArchitectNote>
        Date calculations should always follow business semantics.
        <br />
        <br />
        For example, adding one month is not the same as adding thirty days.
        SAP's built-in date functions automatically handle leap years, different
        month lengths, and calendar rules.
      </ArchitectNote>

      <ContentSection title="Functions Covered in This Lesson">
        <TableBlock
          headers={["Function", "Purpose"]}
          rows={[
            ["DATS_IS_VALID()", "Check whether a date is valid."],
            [
              "DATS_DAYS_BETWEEN()",
              "Calculate the difference between two dates.",
            ],
            ["DATS_ADD_DAYS()", "Add or subtract days."],
            ["DATS_ADD_MONTHS()", "Add or subtract months."],
          ]}
        />
      </ContentSection>

      <ContentSection title="DATS_IS_VALID()">
        <p>
          The <strong>DATS_IS_VALID()</strong> function verifies whether a value
          represents a valid SAP DATS value.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`dats_is_valid( date )`}
        />

        <ParameterTable
          title="DATS_IS_VALID() Parameters"
          parameters={[
            {
              name: "date",
              required: true,
              type: "DATS",
              description: "Date to validate.",
              example: "CreationDate",
            },
          ]}
        />

        <TableBlock
          headers={["Input", "Result"]}
          rows={[
            ["20260705", "1"],
            ["20261301", "0"],
            ["20260229", "0 (Not Leap Year)"],
            ["00000000", "0"],
          ]}
        />
      </ContentSection>

      <ContentSection title="When Should You Use DATS_IS_VALID()?">
        <p>Many developers ask:</p>

        <CodeBlock
          title="Developer Question"
          language="text"
          code={`If SAP already stores dates as DATS,
why do we even need DATS_IS_VALID()?`}
        />

        <p>The answer depends on the source of the data.</p>

        <p>
          For standard SAP interface views such as
          <strong> I_SalesDocument</strong>,<strong> I_BillingDocument</strong>,
          or
          <strong> I_PurchaseOrder</strong>, SAP guarantees that DATS fields are
          valid.
        </p>

        <p>
          Therefore, calling <strong>DATS_IS_VALID()</strong> on these fields
          will almost always return <strong>1</strong>.
        </p>

        <ArchitectNote>
          In modern S/4HANA Public Cloud development, DATS_IS_VALID() is rarely
          required for SAP-managed business objects.
          <br />
          <br />
          Its real value appears when working with data that originates outside
          the SAP application.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Real-World Scenarios">
        <RealWorldExample title="Data Migration">
          Legacy systems often contain invalid dates such as 20261320 or
          00000000. Validate the dates before calculating warranty periods or
          delivery schedules.
        </RealWorldExample>

        <RealWorldExample title="Excel Upload">
          Users frequently upload spreadsheets containing invalid dates such as
          31-February or incorrectly formatted values. DATS_IS_VALID() can
          prevent invalid records from being processed.
        </RealWorldExample>

        <RealWorldExample title="External APIs">
          Third-party systems may send invalid dates in integration payloads.
          Validate them before creating business documents or performing date
          calculations.
        </RealWorldExample>

        <RealWorldExample title="Legacy Z Tables">
          Older ECC systems sometimes stored dates in CHAR fields instead of
          DATS. Validate these values before exposing them through CDS Views.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Practical Example">
        <CodeBlock
          title="Validate Delivery Date Before Calculation"
          language="ABAP CDS"
          code={`case

    when dats_is_valid(
            DeliveryDate
         ) = 1

    then dats_days_between(

            CreationDate,

            DeliveryDate

         )

    else null

end as DeliveryLeadTime`}
        />

        <p>
          Instead of raising runtime errors for invalid dates, the CDS View
          safely skips invalid records.
        </p>
      </ContentSection>

      <ContentSection title="DATS_DAYS_BETWEEN()">
        <p>
          The <strong>DATS_DAYS_BETWEEN()</strong> function calculates the
          number of days between two dates.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`dats_days_between(

    date1,

    date2

)`}
        />

        <ParameterTable
          title="DATS_DAYS_BETWEEN() Parameters"
          parameters={[
            {
              name: "date1",
              required: true,
              type: "DATS",
              description: "Starting date.",
              example: "CreationDate",
            },
            {
              name: "date2",
              required: true,
              type: "DATS",
              description: "Ending date.",
              example: "BillingDate",
            },
          ]}
        />
      </ContentSection>

      <ContentSection title="Example">
        <CodeBlock
          title="Calculate Lead Time"
          language="ABAP CDS"
          code={`dats_days_between(

    CreationDate,

    BillingDate

) as LeadTime`}
        />

        <TableBlock
          headers={["Creation Date", "Billing Date", "Result"]}
          rows={[
            ["20260701", "20260710", "9"],
            ["20260710", "20260701", "-9"],
          ]}
        />

        <BestPractice>
          Negative values are perfectly valid.
          <br />
          <br />
          Avoid wrapping DATS_DAYS_BETWEEN() with ABS() unless the business
          explicitly requires an unsigned difference.
        </BestPractice>
      </ContentSection>

      <ContentSection title="DATS_ADD_DAYS()">
        <p>
          The <strong>DATS_ADD_DAYS()</strong> function adds or subtracts a
          specified number of days from a date and returns the calculated
          result.
        </p>

        <p>
          This function is commonly used for delivery schedules, payment due
          dates, shipment planning, reminder notifications, and logistics
          applications.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`dats_add_days(

    date,

    days,

    on_error

)`}
        />
      </ContentSection>

      <ParameterTable
        title="DATS_ADD_DAYS() Parameters"
        parameters={[
          {
            name: "date",
            required: true,
            type: "DATS",
            description: "Input date.",
            example: "CreationDate",
          },
          {
            name: "days",
            required: true,
            type: "INT4",
            description: "Number of days to add or subtract.",
            example: "30",
          },
          {
            name: "on_error",
            required: true,
            type: "CHAR",
            description: "Determines how invalid dates are handled.",
            example: "'FAIL'",
          },
        ]}
      />

      <ContentSection title="Adding Days">
        <CodeBlock
          title="Add 30 Days"
          language="ABAP CDS"
          code={`dats_add_days(

    CreationDate,

    30,

    'FAIL'

) as DueDate`}
        />

        <TableBlock
          headers={["Creation Date", "Days", "Result"]}
          rows={[["20260705", "30", "20260804"]]}
        />
      </ContentSection>

      <ContentSection title="Subtracting Days">
        <p>Negative values are fully supported.</p>

        <CodeBlock
          title="Subtract 15 Days"
          language="ABAP CDS"
          code={`dats_add_days(

    CreationDate,

    -15,

    'FAIL'

) as ReminderDate`}
        />

        <TableBlock
          headers={["Creation Date", "Days", "Result"]}
          rows={[["20260705", "-15", "20260620"]]}
        />

        <RealWorldExample title="Delivery Reminder">
          Send reminder notifications 15 days before an expected delivery or
          contract renewal.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="DATS_ADD_MONTHS()">
        <p>
          The <strong>DATS_ADD_MONTHS()</strong> function adds or subtracts
          complete calendar months rather than a fixed number of days.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`dats_add_months(

    date,

    months,

    on_error

)`}
        />
      </ContentSection>

      <ParameterTable
        title="DATS_ADD_MONTHS() Parameters"
        parameters={[
          {
            name: "date",
            required: true,
            type: "DATS",
            description: "Input date.",
            example: "CreationDate",
          },
          {
            name: "months",
            required: true,
            type: "INT4",
            description: "Number of calendar months to add or subtract.",
            example: "3",
          },
          {
            name: "on_error",
            required: true,
            type: "CHAR",
            description: "Determines how invalid dates are handled.",
            example: "'FAIL'",
          },
        ]}
      />

      <ContentSection title="Example">
        <CodeBlock
          title="Add Three Months"
          language="ABAP CDS"
          code={`dats_add_months(

    CreationDate,

    3,

    'FAIL'

) as WarrantyEndDate`}
        />

        <TableBlock
          headers={["Creation Date", "Months", "Result"]}
          rows={[
            ["20260705", "+3", "20261005"],
            ["20260705", "-6", "20260105"],
          ]}
        />
      </ContentSection>

      <ContentSection title="End-of-Month Behavior">
        <p>
          One of the biggest advantages of
          <strong> DATS_ADD_MONTHS()</strong> is that it preserves calendar
          semantics.
        </p>

        <CodeBlock
          title="Example"
          language="text"
          code={`31-Jan-2026

+ 1 Month

↓

28-Feb-2026`}
        />

        <p>
          Since February does not contain a 31st day, SAP automatically returns
          the last valid day of the month.
        </p>

        <ArchitectNote>
          This is why business applications should use
          <strong> DATS_ADD_MONTHS()</strong> instead of approximating a month
          as thirty days.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Understanding the on_error Parameter">
        <p>
          Unlike <strong>CURRENCY_CONVERSION()</strong>, which uses the
          <strong> error_handling</strong> parameter, date functions use the
          <strong> on_error</strong> parameter.
        </p>

        <p>
          Although both control error handling, the supported values are
          completely different.
        </p>

        <TableBlock
          headers={["Value", "Behavior"]}
          rows={[
            ["'FAIL'", "Raise an exception."],
            ["'NULL'", "Return NULL."],
            ["'INITIAL'", "Return 00000000."],
            ["'UNCHANGED'", "Return the original input date."],
          ]}
        />
      </ContentSection>

      <ContentSection title="A Common Developer Mistake">
        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`dats_add_days(

    CreationDate,

    30,

    'S'

)`}
        />

        <CodeBlock
          title="Activation Error"
          language="text"
          code={`Literal of parameter 3 has unallowed value 'S'`}
        />

        <p>
          Many developers assume that the third parameter behaves like the
          conversion functions.
        </p>

        <p>However, date functions accept only the following literals:</p>

        <CodeBlock
          title="Correct Values"
          language="text"
          code={`'FAIL'
'NULL'
'INITIAL'
'UNCHANGED'`}
        />
      </ContentSection>

      <ContentSection title="Complete Practice Example">
        <CodeBlock
          title="Practice CDS View"
          language="ABAP CDS"
          code={`@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Practice: Date Functions'

define view entity ZI_DATE_FUNC_PRAC
  as select from I_SalesDocument
{
    key SalesDocument,

    CreationDate,

    dats_is_valid(
        CreationDate
    ) as IsValid,

    dats_days_between(
        CreationDate,
        $session.system_date
    ) as DaysBetween,

    dats_add_days(
        CreationDate,
        30,
        'FAIL'
    ) as Plus30Days,

    dats_add_days(
        CreationDate,
        -15,
        'FAIL'
    ) as Minus15Days,

    dats_add_months(
        CreationDate,
        3,
        'FAIL'
    ) as Plus3Months,

    dats_add_months(
        CreationDate,
        -6,
        'FAIL'
    ) as Minus6Months

}`}
        />
      </ContentSection>

      <BestPractice>
        Use <strong>DATS_ADD_DAYS()</strong> when the business requirement is
        expressed in days, such as delivery lead times or shipment schedules.
        <br />
        <br />
        Use <strong>DATS_ADD_MONTHS()</strong> for business periods such as
        contracts, subscriptions, warranties, payment terms, and financial
        periods where calendar semantics matter.
      </BestPractice>

      <CommonMistakes
        items={[
          "Using 'S' or other unsupported values for the on_error parameter.",
          "Passing DEC instead of INT4 for the days or months parameter.",
          "Assuming negative values are not supported.",
          "Approximating one month as thirty days instead of using DATS_ADD_MONTHS().",
          "Confusing the on_error parameter with the error_handling parameter used by conversion functions.",
        ]}
      />

      <ContentSection title="Which Date Function Should You Use?">
        <p>
          Each date function serves a different purpose. Choosing the correct
          function depends on the business requirement rather than personal
          preference.
        </p>

        <TableBlock
          headers={["Business Requirement", "Recommended Function", "Reason"]}
          rows={[
            [
              "Validate external dates",
              "DATS_IS_VALID()",
              "Detect invalid dates before calculations.",
            ],
            [
              "Calculate lead time",
              "DATS_DAYS_BETWEEN()",
              "Returns the exact difference in days.",
            ],
            [
              "Add delivery days",
              "DATS_ADD_DAYS()",
              "Business requirement is expressed in days.",
            ],
            [
              "Add contract or warranty period",
              "DATS_ADD_MONTHS()",
              "Preserves calendar semantics.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Real SAP Business Scenarios">
        <RealWorldExample title="Payment Terms">
          Payment due dates are often calculated by adding a fixed number of
          days to the invoice date using DATS_ADD_DAYS().
        </RealWorldExample>

        <RealWorldExample title="Warranty Management">
          Warranty expiration is typically calculated by adding 12, 24, or 36
          calendar months using DATS_ADD_MONTHS().
        </RealWorldExample>

        <RealWorldExample title="Delivery Performance">
          Supply chain dashboards frequently use DATS_DAYS_BETWEEN() to
          calculate the difference between the requested delivery date and the
          actual delivery date.
        </RealWorldExample>

        <RealWorldExample title="Data Migration">
          Before migrating legacy data into SAP S/4HANA, DATS_IS_VALID() can
          identify invalid dates such as 20261301 or 00000000, preventing
          downstream processing errors.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Architect Best Practices">
        <BestPractice>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Use <strong>DATS_ADD_MONTHS()</strong> for contracts,
              subscriptions, warranties, and payment periods instead of adding
              thirty days.
            </li>

            <li>
              Use <strong>DATS_ADD_DAYS()</strong> for logistics, shipping,
              production planning, reminders, and delivery scheduling.
            </li>

            <li>
              During development, prefer
              <strong> 'FAIL'</strong> so invalid dates are detected early.
            </li>

            <li>
              Use <strong>'NULL'</strong> or
              <strong> 'UNCHANGED'</strong> only when the business requirement
              explicitly allows graceful error handling.
            </li>

            <li>
              Validate imported or migrated dates using
              <strong> DATS_IS_VALID()</strong> before performing calculations.
            </li>

            <li>
              Remember that <strong>DATS_DAYS_BETWEEN()</strong> returns
              negative values when the first date is later than the second.
            </li>

            <li>
              Never assume one month equals thirty days. Calendar months vary in
              length, and SAP automatically handles leap years and end-of-month
              adjustments.
            </li>
          </ul>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What are the built-in DATS functions available in ABAP CDS?"
          answer="DATS_IS_VALID(), DATS_DAYS_BETWEEN(), DATS_ADD_DAYS(), and DATS_ADD_MONTHS()."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is DATS_IS_VALID() rarely required on standard interface views such as I_SalesDocument?"
          answer="Because SAP-managed business objects already guarantee valid DATS values. It is mainly useful for external integrations, migration programs, staging tables, and legacy systems."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can DATS_ADD_DAYS() accept negative values?"
          answer="Yes. Negative values subtract days from the supplied date."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why should DATS_ADD_MONTHS() be preferred over adding 30 days?"
          answer="Because months have different lengths. DATS_ADD_MONTHS() preserves calendar semantics and automatically handles leap years and end-of-month dates."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the difference between the error_handling parameter of CURRENCY_CONVERSION() and the on_error parameter of DATS_ADD_DAYS()?"
          answer="CURRENCY_CONVERSION() uses FAIL_ON_ERROR, SET_TO_NULL, and KEEP_UNCONVERTED, whereas DATS_ADD_DAYS() uses FAIL, NULL, INITIAL, and UNCHANGED. Although both control error handling, they support different literals."
        />
      </ContentSection>

      <CheatSheet
        icon="📅"
        title="Date Functions Cheat Sheet"
        stats="4 Functions • Date Validation • Date Arithmetic • SAP HANA Pushdown"
        description="Quick reference for the built-in DATS functions available in ABAP CDS View Entities."
      >
        <TableBlock
          headers={["Function", "Syntax", "Purpose"]}
          rows={[
            [
              "DATS_IS_VALID()",
              "dats_is_valid(date)",
              "Validate a DATS value.",
            ],
            [
              "DATS_DAYS_BETWEEN()",
              "dats_days_between(date1, date2)",
              "Calculate the difference in days.",
            ],
            [
              "DATS_ADD_DAYS()",
              "dats_add_days(date, days, on_error)",
              "Add or subtract days.",
            ],
            [
              "DATS_ADD_MONTHS()",
              "dats_add_months(date, months, on_error)",
              "Add or subtract calendar months.",
            ],
          ]}
        />
      </CheatSheet>

      <ContentSection title="Error Handling Reference">
        <TableBlock
          headers={["Value", "Behavior"]}
          rows={[
            ["'FAIL'", "Raise an exception."],
            ["'NULL'", "Return NULL."],
            ["'INITIAL'", "Return 00000000."],
            ["'UNCHANGED'", "Return the original input date."],
          ]}
        />
      </ContentSection>

      <KeyTakeaway>
        <p>
          Although ABAP CDS provides only four dedicated date functions, they
          cover the majority of business scenarios encountered in SAP
          applications. Understanding when to validate dates, calculate date
          differences, add days, or add calendar months is an essential skill
          for every ABAP Cloud developer.
        </p>

        <p>
          Always select the function that matches the business requirement
          rather than approximating date calculations manually. SAP's built-in
          functions preserve calendar semantics, execute directly in SAP HANA,
          and produce reliable, production-ready results.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          In the accompanying video, we'll implement all four date functions in
          Eclipse ADT, examine their behavior with positive and negative values,
          explore end-of-month calculations, and demonstrate the different
          <strong> on_error</strong> handling strategies in real SAP scenarios.
        </p>

        {/* YouTube Component */}
      </ContentSection>

      <PrevNext
        prevTitle="Numeric Functions"
        prevHref="/tutorials/rap/cds-view-entity/numeric-functions"
        nextTitle="Conversion Functions"
        nextHref="/tutorials/rap/cds-view-entity/conversion-functions"
      />
    </TutorialLayout>
  );
}

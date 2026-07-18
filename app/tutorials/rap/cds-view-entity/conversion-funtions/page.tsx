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
      title="Conversion Functions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="60 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/conversion-funtions.webp"
        alt="Conversion Functions in ABAP CDS View Entity"
        caption="Conversion Functions convert business semantic values into calculation-friendly or business-specific formats while preserving SAP business semantics."
      />

      <ContentSection title="Introduction">
        <p>
          Conversion functions are among the most powerful built-in functions
          available in ABAP CDS View Entities. They allow developers to safely
          convert business semantic values such as currencies, quantities,
          units, and amounts into formats suitable for calculations, reporting,
          and analytics.
        </p>

        <p>
          One of the most common mistakes made by developers transitioning from
          classical ABAP to ABAP Cloud is assuming that business semantic types
          such as <strong>CURR</strong> and <strong>QUAN</strong> behave like
          ordinary numeric values. In reality, these data types carry business
          meaning that SAP protects during CDS processing.
        </p>

        <p>
          Instead of relying on implicit conversions, ABAP CDS provides a rich
          collection of conversion functions that execute directly inside SAP
          HANA while preserving the business semantics defined in the Virtual
          Data Model (VDM).
        </p>
      </ContentSection>

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        If you have ever received activation errors while performing
        calculations on currency or quantity fields, you have already
        encountered the need for conversion functions.
        <br />
        <br />
        These functions are not optional conveniences—they are an essential part
        of production-ready CDS development in SAP S/4HANA Public Cloud.
      </ArchitectNote>

      <ContentSection title="Learning Objectives">
        <p>
          By the end of this lesson, you will understand when each conversion
          function should be used and how to avoid the most common mistakes
          encountered during CDS development.
        </p>

        <TableBlock
          headers={["Topic", "Covered"]}
          rows={[
            ["GET_NUMERIC_VALUE()", "✅"],
            ["CURR_TO_DECFLOAT_AMOUNT()", "✅"],
            ["CURRENCY_CONVERSION()", "✅"],
            ["UNIT_CONVERSION()", "✅"],
            ["Parameter Reference", "✅"],
            ["Error Handling", "✅"],
            ["Real SAP Scenarios", "✅"],
            ["Architect Best Practices", "✅"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Why Do Conversion Functions Exist?">
        <p>
          To understand conversion functions, we first need to understand the
          difference between a technical numeric value and a business semantic
          value.
        </p>

        <p>
          Consider a billing document amount stored as a CURR field. Although it
          looks like a decimal number, it actually consists of two pieces of
          information:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>The numeric amount.</li>

          <li>The associated currency key.</li>
        </ul>

        <p className="mt-4">
          Removing either piece of information changes the business meaning of
          the value.
        </p>

        <RealWorldExample title="Invoice Amount">
          An invoice amount of 10,000 means nothing unless you also know whether
          it is INR, USD, EUR, or JPY. Business semantic types preserve this
          relationship.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Business Semantic Types vs Technical Numeric Types">
        <TableBlock
          headers={[
            "Business Type",
            "Business Meaning",
            "Can Calculate Directly?",
          ]}
          rows={[
            ["CURR", "Currency Amount", "❌ No"],
            ["QUAN", "Quantity", "❌ No"],
            ["DEC", "Technical Decimal", "✅ Yes"],
            ["DECFLOAT16", "Decimal Floating Point", "✅ Yes"],
            ["DECFLOAT34", "High Precision Decimal", "✅ Yes"],
          ]}
        />

        <p className="mt-6">
          This distinction is the primary reason why conversion functions exist.
          SAP intentionally separates business semantics from technical numeric
          calculations to ensure financial and logistical accuracy.
        </p>
      </ContentSection>

      <BestPractice>
        Never use CAST simply because a calculation fails.
        <br />
        <br />
        First identify whether the field is a business semantic type such as
        CURR or QUAN. In most production scenarios, one of the dedicated
        conversion functions is the correct solution.
      </BestPractice>

      <ContentSection title="The Conversion Functions Covered in This Lesson">
        <TableBlock
          headers={["Function", "Primary Purpose"]}
          rows={[
            ["GET_NUMERIC_VALUE()", "Remove currency or quantity semantics."],
            [
              "CURR_TO_DECFLOAT_AMOUNT()",
              "Convert CURR into DECFLOAT for calculations.",
            ],
            [
              "CURRENCY_CONVERSION()",
              "Convert an amount from one currency to another.",
            ],
            [
              "UNIT_CONVERSION()",
              "Convert quantities between different units of measure.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="GET_NUMERIC_VALUE()">
        <p>
          One of the most common activation errors in ABAP CDS occurs when
          developers attempt to perform arithmetic operations directly on
          <strong> CURR</strong> or <strong>QUAN</strong> fields.
        </p>

        <p>
          Since these fields contain business semantics in addition to their
          numeric value, CDS does not treat them as ordinary decimal numbers.
          The <strong>GET_NUMERIC_VALUE()</strong> function removes those
          semantics and returns only the underlying numeric value, making it
          suitable for calculations.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`get_numeric_value( amount_or_quantity )`}
        />

        <ArchitectNote>
          Think of <strong>GET_NUMERIC_VALUE()</strong> as removing the business
          wrapper from a CURR or QUAN field.
          <br />
          <br />
          The business meaning still exists in your data model, but the returned
          expression behaves like a normal numeric value that can be used in
          mathematical calculations.
        </ArchitectNote>
      </ContentSection>

      <ParameterTable
        title="GET_NUMERIC_VALUE() Parameters"
        parameters={[
          {
            name: "amount_or_quantity",
            required: true,
            type: "CURR / QUAN",
            description:
              "Currency amount or quantity whose numeric value should be returned.",
            example: "TotalNetAmount",
          },
        ]}
      />

      <ContentSection title="Example: Calculating GST">
        <p>Consider the following billing amount.</p>

        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`TotalNetAmount * 0.18 as GSTAmount`}
        />

        <p>
          Depending on the data type, this expression may fail to activate
          because <strong>TotalNetAmount</strong> is a CURR field rather than a
          simple decimal value.
        </p>

        <p>Instead, remove the currency semantics first.</p>

        <CodeBlock
          title="Correct"
          language="ABAP CDS"
          code={`get_numeric_value(
    TotalNetAmount
) * 0.18 as GSTAmount`}
        />

        <RealWorldExample title="Billing Analytics">
          Many analytical CDS Views calculate GST, discounts, commissions,
          margins, and percentages. GET_NUMERIC_VALUE() is commonly used before
          these calculations.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="CURR_TO_DECFLOAT_AMOUNT()">
        <p>
          Although GET_NUMERIC_VALUE() removes business semantics, many
          financial calculations require higher decimal precision than standard
          packed numbers.
        </p>

        <p>
          This is where
          <strong> CURR_TO_DECFLOAT_AMOUNT()</strong>
          becomes useful.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`curr_to_decfloat_amount( amount )`}
        />

        <p>
          Instead of simply removing the business semantics, this function
          converts a CURR field into a<strong> DECFLOAT34</strong> value
          suitable for high-precision financial calculations.
        </p>
      </ContentSection>

      <ParameterTable
        title="CURR_TO_DECFLOAT_AMOUNT() Parameters"
        parameters={[
          {
            name: "amount",
            required: true,
            type: "CURR",
            description: "Currency amount to be converted into DECFLOAT.",
            example: "TotalNetAmount",
          },
        ]}
      />

      <ContentSection title="Example: Financial Calculation">
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`curr_to_decfloat_amount(
    TotalNetAmount
) * 1.18 as GrossAmount`}
        />

        <p>
          The resulting value has the DECFLOAT type, making it ideal for
          calculations that require greater decimal precision than packed
          numbers.
        </p>
      </ContentSection>

      <ContentSection title="GET_NUMERIC_VALUE() vs CURR_TO_DECFLOAT_AMOUNT()">
        <TableBlock
          headers={["Function", "Returns", "Typical Usage"]}
          rows={[
            [
              "GET_NUMERIC_VALUE()",
              "Numeric Value",
              "General mathematical calculations",
            ],
            [
              "CURR_TO_DECFLOAT_AMOUNT()",
              "DECFLOAT34",
              "Financial calculations requiring higher precision",
            ],
          ]}
        />

        <ArchitectNote>
          Both functions solve similar problems but produce different output
          types.
          <br />
          <br />
          If precision is important—for example in financial reporting,
          taxation, or currency calculations—prefer
          <strong> CURR_TO_DECFLOAT_AMOUNT()</strong>.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="When Should You Use Each Function?">
        <TableBlock
          headers={["Scenario", "Recommended Function"]}
          rows={[
            ["Calculate GST", "GET_NUMERIC_VALUE()"],
            ["Calculate Discount Percentage", "GET_NUMERIC_VALUE()"],
            ["Margin Calculation", "CURR_TO_DECFLOAT_AMOUNT()"],
            ["Financial Reporting", "CURR_TO_DECFLOAT_AMOUNT()"],
            ["Currency Conversion", "CURRENCY_CONVERSION()"],
          ]}
        />
      </ContentSection>

      <BestPractice>
        Avoid using
        <strong> CAST()</strong>
        to convert CURR fields for calculations.
        <br />
        <br />
        SAP provides dedicated conversion functions that preserve business
        semantics and produce predictable results. These functions should always
        be preferred over generic type conversion.
      </BestPractice>

      <CommonMistakes
        items={[
          "Using CAST() instead of GET_NUMERIC_VALUE() for arithmetic operations.",
          "Assuming CURR behaves like DEC in CDS.",
          "Using CURR_TO_DECFLOAT_AMOUNT() when only a simple numeric calculation is required.",
          "Ignoring the resulting data type after conversion.",
        ]}
      />

      <ContentSection title="CURRENCY_CONVERSION()">
        <p>
          The <strong>CURRENCY_CONVERSION()</strong> function converts an amount
          from one currency into another using the exchange rates maintained in
          the SAP system.
        </p>

        <p>
          Unlike GET_NUMERIC_VALUE() or CURR_TO_DECFLOAT_AMOUNT(), this function
          performs a true business conversion rather than simply changing the
          technical data type.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`currency_conversion(
    amount               => amount,
    source_currency      => source_currency,
    target_currency      => target_currency,
    exchange_rate_date   => exchange_rate_date
)`}
        />

        <ArchitectNote>
          Currency conversion is a business operation, not a mathematical one.
          <br />
          <br />
          SAP automatically looks up exchange rates from the currency
          configuration tables using the supplied exchange rate date and
          exchange rate type.
        </ArchitectNote>
      </ContentSection>

      <ParameterTable
        title="CURRENCY_CONVERSION() Parameters"
        parameters={[
          {
            name: "amount",
            required: true,
            type: "CURR",
            description: "Source amount to convert.",
            example: "TotalNetAmount",
          },
          {
            name: "source_currency",
            required: true,
            type: "CUKY",
            description: "Currency of the source amount.",
            example: "TransactionCurrency",
          },
          {
            name: "target_currency",
            required: true,
            type: "CUKY",
            description: "Currency into which the amount should be converted.",
            example: "cast('USD' as abap.cuky(5))",
          },
          {
            name: "exchange_rate_date",
            required: true,
            type: "DATS",
            description: "Date used to determine the exchange rate.",
            example: "$session.system_date",
          },
          {
            name: "exchange_rate_type",
            type: "CHAR(4)",
            defaultValue: "'M'",
            description: "Exchange rate type maintained in SAP.",
            example: "'M'",
          },
          {
            name: "round",
            type: "CHAR(1)",
            defaultValue: "System Default",
            description: "Apply commercial rounding.",
            example: "'X'",
          },
          {
            name: "decimal_shift",
            type: "CHAR(1)",
            description: "Shift decimal places before conversion.",
          },
          {
            name: "decimal_shift_back",
            type: "CHAR(1)",
            description: "Shift decimal places after conversion.",
          },
          {
            name: "client",
            type: "CLNT",
            description: "Client used for exchange rate lookup.",
            example: "$session.client",
          },
          {
            name: "error_handling",
            type: "CHAR(20)",
            defaultValue: "'FAIL_ON_ERROR'",
            description: "Determines behavior if conversion fails.",
          },
        ]}
      />

      <ContentSection title="Basic Example">
        <CodeBlock
          title="Convert Billing Amount into USD"
          language="ABAP CDS"
          code={`@Semantics.amount.currencyCode: 'TransactionCurrency'

currency_conversion(

    amount               => TotalNetAmount,

    source_currency      => TransactionCurrency,

    target_currency      => cast( 'USD' as abap.cuky(5) ),

    exchange_rate_date   => $session.system_date

) as USDAmount`}
        />

        <p>
          SAP automatically determines the exchange rate using the configured
          exchange rate tables and converts the billing amount into USD.
        </p>
      </ContentSection>

      <ContentSection title="Why Do We Need CAST()?">
        <p>One of the most common activation errors looks like this:</p>

        <CodeBlock
          title="Activation Error"
          language="text"
          code={`Literal of type CHAR is not supported for parameter TARGET_CURRENCY`}
        />

        <p>Many developers naturally write:</p>

        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`target_currency => 'USD'`}
        />

        <p>
          However, the
          <strong> target_currency</strong> parameter expects a value of type
          <strong> CUKY</strong>, not a plain character literal.
        </p>

        <CodeBlock
          title="Correct"
          language="ABAP CDS"
          code={`target_currency => cast(
    'USD'
    as abap.cuky(5)
)`}
        />

        <BestPractice>
          Whenever a CDS function expects a semantic business type such as CUKY
          or UNIT, use CAST() to convert string literals into the appropriate
          semantic type.
        </BestPractice>
      </ContentSection>

      <ContentSection title="Handling Conversion Errors">
        <p>Another common question is:</p>

        <CodeBlock
          title="Developer Question"
          language="text"
          code={`What happens if SAP cannot determine an exchange rate?`}
        />

        <p>By default, CDS raises an exception and the query fails.</p>

        <p>
          To control this behavior, use the
          <strong> error_handling</strong> parameter.
        </p>

        <TableBlock
          headers={["Value", "Behavior"]}
          rows={[
            ["'FAIL_ON_ERROR'", "Raise an exception (default)."],
            ["'SET_TO_NULL'", "Return NULL when conversion fails."],
            [
              "'KEEP_UNCONVERTED'",
              "Return the original amount without conversion.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Example with Error Handling">
        <CodeBlock
          title="Recommended Example"
          language="ABAP CDS"
          code={`currency_conversion(

    amount               => TotalNetAmount,

    source_currency      => TransactionCurrency,

    target_currency      => cast(
        'USD'
        as abap.cuky(5)
    ),

    exchange_rate_date   => $session.system_date,

    error_handling       => 'SET_TO_NULL'

) as USDAmount`}
        />

        <RealWorldExample title="Missing Exchange Rates">
          Production systems occasionally encounter missing exchange rates for
          historical dates or rarely used currencies. Returning NULL is often
          preferable to causing the entire CDS query to fail.
        </RealWorldExample>
      </ContentSection>

      <ArchitectNote>
        Many developers discover the
        <strong> error_handling</strong> parameter only after encountering
        runtime errors.
        <br />
        <br />
        As an architect, decide the desired business behavior up front:
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            Financial reporting usually requires
            <strong> FAIL_ON_ERROR</strong>.
          </li>

          <li>
            Analytical dashboards often prefer
            <strong> SET_TO_NULL</strong>.
          </li>

          <li>
            Operational reports sometimes use
            <strong> KEEP_UNCONVERTED</strong>.
          </li>
        </ul>
      </ArchitectNote>

      <CommonMistakes
        items={[
          "Passing 'USD' directly instead of casting it to CUKY.",
          "Ignoring the error_handling parameter.",
          "Using today's date when historical exchange rates should be used.",
          "Assuming currency_conversion() only changes the data type—it performs a business conversion using SAP exchange rates.",
        ]}
      />

      <ContentSection title="UNIT_CONVERSION()">
        <p>
          Just as <strong>CURRENCY_CONVERSION()</strong> converts monetary
          values between different currencies,
          <strong> UNIT_CONVERSION()</strong> converts quantities between
          different units of measure using the conversion rules maintained in
          SAP.
        </p>

        <p>
          Instead of manually multiplying values by conversion factors, SAP
          automatically determines the correct conversion ratio based on the
          configured Unit of Measure (UoM) master data.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`unit_conversion(

    quantity        => quantity,

    source_unit     => source_unit,

    target_unit     => target_unit

)`}
        />

        <ArchitectNote>
          Unit conversion is a business conversion rather than a mathematical
          multiplication.
          <br />
          <br />
          SAP determines the appropriate conversion factor from the Unit of
          Measure configuration rather than relying on hard-coded formulas.
        </ArchitectNote>
      </ContentSection>

      <ParameterTable
        title="UNIT_CONVERSION() Parameters"
        parameters={[
          {
            name: "quantity",
            required: true,
            type: "QUAN",
            description: "Quantity to be converted.",
            example: "OrderQuantity",
          },
          {
            name: "source_unit",
            required: true,
            type: "UNIT",
            description: "Current unit of measure.",
            example: "BaseUnit",
          },
          {
            name: "target_unit",
            required: true,
            type: "UNIT",
            description: "Target unit of measure.",
            example: "cast('KG' as abap.unit(3))",
          },
          {
            name: "client",
            type: "CLNT",
            description: "Client used during conversion.",
            example: "$session.client",
          },
          {
            name: "error_handling",
            type: "CHAR(20)",
            defaultValue: "'FAIL_ON_ERROR'",
            description:
              "Determines the behavior if conversion cannot be performed.",
          },
        ]}
      />

      <ContentSection title="Basic Example">
        <CodeBlock
          title="Convert Quantity into Kilograms"
          language="ABAP CDS"
          code={`@Semantics.quantity.unitOfMeasure: 'BaseUnit'

unit_conversion(

    quantity        => OrderQuantity,

    source_unit     => BaseUnit,

    target_unit     => cast(
        'KG'
        as abap.unit(3)
    )

) as QuantityInKG`}
        />

        <p>
          SAP automatically converts the quantity into kilograms using the
          maintained Unit of Measure conversion definitions.
        </p>
      </ContentSection>

      <ContentSection title="Why CAST() Is Required">
        <p>
          Just like currency conversion, the
          <strong> target_unit</strong> parameter expects the semantic data type{" "}
          <strong>UNIT</strong>, not a character literal.
        </p>

        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`target_unit => 'KG'`}
        />

        <CodeBlock
          title="Correct"
          language="ABAP CDS"
          code={`target_unit => cast(

    'KG'

    as abap.unit(3)

)`}
        />

        <BestPractice>
          Whenever a conversion function expects a semantic business type such
          as UNIT or CUKY, always CAST literals to the appropriate semantic
          type.
        </BestPractice>
      </ContentSection>

      <ContentSection title="Error Handling">
        <p>
          UNIT_CONVERSION() supports the same error handling strategies as
          CURRENCY_CONVERSION().
        </p>

        <TableBlock
          headers={["Value", "Behavior"]}
          rows={[
            ["'FAIL_ON_ERROR'", "Raise an exception."],
            ["'SET_TO_NULL'", "Return NULL if conversion fails."],
            ["'KEEP_UNCONVERTED'", "Return the original quantity."],
          ]}
        />

        <CodeBlock
          title="Recommended Example"
          language="ABAP CDS"
          code={`unit_conversion(

    quantity        => OrderQuantity,

    source_unit     => BaseUnit,

    target_unit     => cast(
        'KG'
        as abap.unit(3)
    ),

    error_handling  => 'SET_TO_NULL'

) as QuantityInKG`}
        />
      </ContentSection>

      <ContentSection title="Real-World Example">
        <RealWorldExample title="Procurement Dashboard">
          Suppliers may deliver materials in different units such as G, KG, LB,
          TON, EA, or BOX. Before comparing procurement quantities across
          suppliers, all values should be converted into a common reporting unit
          using UNIT_CONVERSION().
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="CURRENCY_CONVERSION() vs UNIT_CONVERSION()">
        <TableBlock
          headers={["Feature", "CURRENCY_CONVERSION()", "UNIT_CONVERSION()"]}
          rows={[
            ["Converts", "Currency Amount", "Quantity"],
            ["Business Semantic Type", "CURR", "QUAN"],
            ["Target Type", "CUKY", "UNIT"],
            [
              "Configuration Source",
              "Exchange Rate Tables",
              "Unit of Measure Configuration",
            ],
            [
              "Typical Scenario",
              "Financial Reporting",
              "Inventory & Logistics",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Which Conversion Function Should You Use?">
        <TableBlock
          headers={["Requirement", "Recommended Function"]}
          rows={[
            ["Remove CURR semantics", "GET_NUMERIC_VALUE()"],
            ["Convert CURR to DECFLOAT", "CURR_TO_DECFLOAT_AMOUNT()"],
            ["Convert Currency", "CURRENCY_CONVERSION()"],
            ["Convert Quantity", "UNIT_CONVERSION()"],
          ]}
        />
      </ContentSection>

      <CommonMistakes
        items={[
          "Passing 'KG' directly instead of casting it to UNIT.",
          "Using multiplication instead of UNIT_CONVERSION().",
          "Ignoring error handling for missing unit conversions.",
          "Confusing UNIT_CONVERSION() with GET_NUMERIC_VALUE().",
        ]}
      />

      <ArchitectNote>
        One of the biggest differences between classical ABAP and ABAP CDS is
        trusting the SAP business configuration.
        <br />
        <br />
        Rather than maintaining your own conversion factors, always use
        UNIT_CONVERSION() and CURRENCY_CONVERSION() whenever business semantics
        are involved. This ensures that your CDS Views remain aligned with SAP
        configuration and continue to work correctly even when conversion rules
        change.
      </ArchitectNote>

      <ContentSection title="Understanding Error Handling">
        <p>
          Both <strong>CURRENCY_CONVERSION()</strong> and
          <strong> UNIT_CONVERSION()</strong> perform business conversions using
          SAP configuration.
        </p>

        <p>
          In production systems, conversions may occasionally fail because
          exchange rates or unit conversion definitions are unavailable. Instead
          of allowing the entire CDS query to fail, SAP provides the
          <strong> error_handling</strong> parameter to control the desired
          behavior.
        </p>

        <ArchitectNote>
          Never choose an error handling strategy based only on technical
          convenience.
          <br />
          <br />
          The correct option depends entirely on the business requirement.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Supported Error Handling Options">
        <TableBlock
          headers={["Option", "Behavior", "Typical Usage"]}
          rows={[
            [
              "'FAIL_ON_ERROR'",
              "Raises an exception and stops processing.",
              "Financial postings, statutory reporting",
            ],
            [
              "'SET_TO_NULL'",
              "Returns NULL when conversion fails.",
              "Analytical CDS Views, dashboards",
            ],
            [
              "'KEEP_UNCONVERTED'",
              "Returns the original value without conversion.",
              "Operational reports",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Example: FAIL_ON_ERROR">
        <CodeBlock
          title="Financial Reporting"
          language="ABAP CDS"
          code={`currency_conversion(

    amount               => TotalNetAmount,

    source_currency      => TransactionCurrency,

    target_currency      => cast(
        'USD'
        as abap.cuky(5)
    ),

    exchange_rate_date   => $session.system_date,

    error_handling       => 'FAIL_ON_ERROR'

) as USDAmount`}
        />

        <RealWorldExample title="Statutory Financial Reporting">
          When preparing statutory financial statements, silently ignoring
          missing exchange rates is unacceptable. The report should fail
          immediately so the missing configuration can be corrected.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Example: SET_TO_NULL">
        <CodeBlock
          title="Analytical Dashboard"
          language="ABAP CDS"
          code={`currency_conversion(

    amount               => TotalNetAmount,

    source_currency      => TransactionCurrency,

    target_currency      => cast(
        'USD'
        as abap.cuky(5)
    ),

    exchange_rate_date   => $session.system_date,

    error_handling       => 'SET_TO_NULL'

) as USDAmount`}
        />

        <RealWorldExample title="Management Dashboard">
          A dashboard should continue loading even if a few historical exchange
          rates are missing. Returning NULL allows users to continue analyzing
          the remaining data.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Example: KEEP_UNCONVERTED">
        <CodeBlock
          title="Operational Report"
          language="ABAP CDS"
          code={`currency_conversion(

    amount               => TotalNetAmount,

    source_currency      => TransactionCurrency,

    target_currency      => cast(
        'USD'
        as abap.cuky(5)
    ),

    exchange_rate_date   => $session.system_date,

    error_handling       => 'KEEP_UNCONVERTED'

) as USDAmount`}
        />

        <RealWorldExample title="Operational Monitoring">
          Warehouse or operational reports sometimes prefer displaying the
          original value rather than interrupting users with an exception.
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Architect Best Practices">
        <BestPractice>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Use <strong>GET_NUMERIC_VALUE()</strong> when removing business
              semantics before calculations.
            </li>

            <li>
              Use <strong>CURR_TO_DECFLOAT_AMOUNT()</strong> for high-precision
              financial calculations.
            </li>

            <li>
              Use <strong>CURRENCY_CONVERSION()</strong> instead of manually
              multiplying exchange rates.
            </li>

            <li>
              Use <strong>UNIT_CONVERSION()</strong> instead of maintaining
              custom conversion factors.
            </li>

            <li>
              Always CAST string literals supplied to semantic parameters such
              as CUKY and UNIT.
            </li>

            <li>
              Select the appropriate <strong>error_handling</strong> strategy
              according to the business requirement rather than personal
              preference.
            </li>
          </ul>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="Why can't CURR fields always be used directly in calculations?"
          answer="Because CURR is a business semantic type rather than a simple numeric value."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between GET_NUMERIC_VALUE() and CURR_TO_DECFLOAT_AMOUNT()?"
          answer="GET_NUMERIC_VALUE() removes business semantics, whereas CURR_TO_DECFLOAT_AMOUNT() converts the amount into a DECFLOAT value suitable for high-precision calculations."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why must 'USD' be cast when supplied as target_currency?"
          answer="Because target_currency expects the semantic type CUKY rather than a character literal."
        />

        <InterviewQuestion
          level="Experienced"
          question="When should SET_TO_NULL be preferred over FAIL_ON_ERROR?"
          answer="For analytical CDS Views or dashboards where displaying partial results is preferable to terminating the query."
        />

        <InterviewQuestion
          level="Architect"
          question="Should currency conversion be implemented using multiplication or CURRENCY_CONVERSION()?"
          answer="Always use CURRENCY_CONVERSION() because SAP automatically determines the correct exchange rate from system configuration."
        />
      </ContentSection>

      <CheatSheet
        icon="💱"
        title="Conversion Functions Cheat Sheet"
        stats="4 Functions • Business Conversions • SAP HANA Pushdown"
        description="Quick reference for the most commonly used conversion functions in ABAP CDS View Entities."
      >
        <TableBlock
          headers={["Function", "Syntax", "Purpose"]}
          rows={[
            [
              "GET_NUMERIC_VALUE()",
              "get_numeric_value(field)",
              "Remove business semantics",
            ],
            [
              "CURR_TO_DECFLOAT_AMOUNT()",
              "curr_to_decfloat_amount(field)",
              "Convert CURR to DECFLOAT",
            ],
            [
              "CURRENCY_CONVERSION()",
              "currency_conversion(...)",
              "Convert currency values",
            ],
            [
              "UNIT_CONVERSION()",
              "unit_conversion(...)",
              "Convert units of measure",
            ],
          ]}
        />
      </CheatSheet>

      <KeyTakeaway>
        <p>
          Conversion functions are essential for building production-ready CDS
          View Entities. Rather than relying on generic type conversion or
          manual calculations, SAP provides specialized functions that preserve
          business semantics while executing efficiently in SAP HANA.
        </p>

        <p>
          Understanding when to use GET_NUMERIC_VALUE(),
          CURR_TO_DECFLOAT_AMOUNT(), CURRENCY_CONVERSION(), and
          UNIT_CONVERSION() is a fundamental skill expected from every ABAP
          Cloud developer and SAP Technical Architect.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          In the accompanying video, we'll implement every conversion function
          discussed in this lesson using Eclipse ADT and SAP S/4HANA Public
          Cloud. We'll troubleshoot common activation errors, explore error
          handling strategies, and build production-ready examples.
        </p>

        {/* YouTube Component */}
      </ContentSection>

      <PrevNext
        prevTitle="Date & Time Functions"
        prevHref="/tutorials/rap/cds-view-entity/date-time-functions"
        nextTitle="Why Associations"
        nextHref="/tutorials/rap/cds-view-entity/association"
      />
    </TutorialLayout>
  );
}

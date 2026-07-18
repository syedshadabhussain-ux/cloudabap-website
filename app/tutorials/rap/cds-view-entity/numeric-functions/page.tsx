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
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import CheatSheet from "@/components/tutorials/CheatSheet";

export default function Page() {
  return (
    <TutorialLayout
      title="Numeric Functions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="45 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every ABAP Cloud Developer Should Master Numeric Functions">
        <p>
          Business applications constantly perform numeric calculations. Whether
          you're calculating discounts, taxes, quantities, averages,
          percentages, exchange rates, or analytical KPIs, numeric operations
          are an essential part of almost every CDS View Entity.
        </p>

        <p>
          Instead of retrieving raw data and performing calculations in ABAP,
          SAP recommends pushing these calculations to the database whenever
          possible. This approach allows SAP HANA to execute the logic directly,
          improving performance and reducing application server processing.
        </p>

        <p>
          ABAP CDS provides several built-in numeric functions for rounding,
          division, absolute values, and mathematical calculations.
          Understanding when and how to use these functions is an important
          skill for every RAP and ABAP Cloud developer.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/numeric-functions.webp"
          alt="Numeric Functions in ABAP CDS"
          caption="Numeric functions enable SAP HANA to perform mathematical calculations directly in CDS View Entities, supporting efficient code pushdown and analytical reporting."
        />
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <p>
          After completing this lesson, you'll understand the purpose, behavior,
          and limitations of the most commonly used numeric functions available
          in ABAP CDS View Entities.
        </p>

        <TableBlock
          title="After Completing This Lesson You Will Be Able To"
          headers={["Skill", "Description"]}
          rows={[
            [
              "Understand Numeric Functions",
              "Explain the purpose of each built-in numeric function.",
            ],
            ["Round Values", "Use CEIL(), FLOOR(), and ROUND() appropriately."],
            [
              "Perform Division",
              "Choose between DIV(), DIVISION(), and MOD().",
            ],
            [
              "Avoid Compiler Errors",
              "Understand supported data types for each function.",
            ],
            [
              "Build Better CDS Views",
              "Push mathematical calculations to SAP HANA.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Numeric Functions Overview">
        <p>
          SAP provides several built-in numeric functions for performing common
          mathematical operations. Each function is designed for a specific
          purpose and supports a defined set of data types.
        </p>

        <TableBlock
          title="Numeric Functions"
          headers={["Function", "Purpose", "Typical Usage"]}
          rows={[
            ["ABS()", "Returns absolute value", "Financial calculations"],
            ["CEIL()", "Rounds upward", "Packaging calculations"],
            ["FLOOR()", "Rounds downward", "Inventory calculations"],
            ["ROUND()", "Rounds to specified decimals", "Currency reporting"],
            ["DIV()", "Integer division", "Business calculations"],
            ["DIVISION()", "Decimal division", "Ratios and percentages"],
            ["MOD()", "Returns remainder", "Grouping and scheduling"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Although these functions appear similar to their ABAP counterparts,
          they execute directly in SAP HANA as part of the SQL statement.
          Understanding their supported data types is essential because not
          every numeric function accepts the same operand types.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="ABS() - Absolute Value">
        <p>
          The <strong>ABS()</strong> function returns the absolute value of a
          numeric expression by removing its sign.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`abs( numeric_expression )`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`abs( TotalNetAmount ) as AbsoluteAmount`}
        />

        <TableBlock
          title="Example Results"
          headers={["Input", "Output"]}
          rows={[
            ["100", "100"],
            ["-100", "100"],
            ["250.75", "250.75"],
            ["-250.75", "250.75"],
          ]}
        />

        <RealWorldExample title="Financial Reporting">
          <p>
            Credit memos are often stored as negative amounts, while invoices
            are stored as positive amounts. When preparing analytical reports,
            businesses sometimes want to compare transaction values regardless
            of their sign.
          </p>

          <p>
            Using <strong>ABS()</strong> allows both invoices and credit memos
            to be displayed as positive values for reporting purposes.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="CEIL() - Round Up">
        <p>
          The <strong>CEIL()</strong> function always rounds a numeric value
          upward to the next whole integer.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`ceil( numeric_expression )`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`ceil( GrossWeight ) as RoundedWeight`}
        />

        <TableBlock
          title="Example Results"
          headers={["Input", "Output"]}
          rows={[
            ["10.01", "11"],
            ["10.50", "11"],
            ["10.99", "11"],
            ["10.00", "10"],
          ]}
        />

        <RealWorldExample title="Packaging Calculation">
          <p>
            A warehouse ships products in full cartons. If one carton can hold
            10.5 kilograms, shipping 10.1 kilograms still requires one complete
            carton.
          </p>

          <p>
            CEIL() ensures that fractional values are always rounded upward so
            enough packaging is allocated.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="FLOOR() - Round Down">
        <p>
          The <strong>FLOOR()</strong> function rounds a numeric value downward
          to the nearest whole integer.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`floor( numeric_expression )`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`floor( GrossWeight ) as RoundedWeight`}
        />

        <TableBlock
          title="Example Results"
          headers={["Input", "Output"]}
          rows={[
            ["10.99", "10"],
            ["10.50", "10"],
            ["10.01", "10"],
            ["10.00", "10"],
          ]}
        />

        <RealWorldExample title="Inventory Reporting">
          <p>
            A manufacturing report may need to display only completed units
            produced during a shift. Any partially completed unit should not be
            counted.
          </p>

          <p>
            FLOOR() removes the fractional component and returns only the
            completed quantity.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Remember the difference:
            <br />
            <br />
            <strong>CEIL()</strong> always rounds upward.
            <br />
            <strong>FLOOR()</strong> always rounds downward.
            <br />
            Neither function follows traditional mathematical rounding rules.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="ROUND() - Round to a Specified Number of Decimal Places">
        <p>
          The <strong>ROUND()</strong> function rounds a numeric value to the
          specified number of decimal places. Unlike <strong>CEIL()</strong> and
          <strong>FLOOR()</strong>, ROUND follows normal mathematical rounding
          rules.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`round( numeric_expression, decimal_places )`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`round(
    TotalNetAmount,
    2
) as RoundedAmount`}
        />

        <TableBlock
          title="Example Results"
          headers={["Input", "Decimal Places", "Output"]}
          rows={[
            ["125.456", "2", "125.46"],
            ["125.454", "2", "125.45"],
            ["125.5", "0", "126"],
            ["125.4", "0", "125"],
          ]}
        />

        <RealWorldExample title="Financial Reporting">
          <p>
            Currency amounts are commonly stored with greater precision during
            calculations but displayed with two decimal places in reports and
            Fiori applications.
          </p>

          <p>
            ROUND() ensures that values are presented using the required
            business precision.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="DIV() - Integer Division">
        <p>
          The <strong>DIV()</strong> function performs integer division and
          returns only the quotient. Any fractional part of the result is
          discarded.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`div( operand1, operand2 )`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`div(
    cast( TotalNetAmount as abap.dec(13,2) ),
    20
) as Quotient`}
        />

        <TableBlock
          title="Example Results"
          headers={["Expression", "Result"]}
          rows={[
            ["125 DIV 20", "6"],
            ["99 DIV 10", "9"],
            ["45 DIV 7", "6"],
          ]}
        />

        <ArchitectNote>
          <strong>Important</strong>
          <br />
          <br />
          Although DIV performs integer division, it supports more than just
          integer operands. It also accepts certain decimal business types such
          as <strong>DEC</strong> and <strong>QUAN</strong>.
        </ArchitectNote>

        <TableBlock
          title="Supported Data Types for DIV()"
          headers={["Supported", "Not Supported"]}
          rows={[
            ["INT1", "DECFLOAT16"],
            ["INT2", "DECFLOAT34"],
            ["INT4", ""],
            ["INT8", ""],
            ["DEC", ""],
            ["QUAN", ""],
          ]}
        />
      </ContentSection>

      <ContentSection title="DIVISION() - Decimal Division">
        <p>
          While DIV() returns only the integer quotient, the
          <strong> DIVISION()</strong> function preserves decimal precision.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`division(
    operand1,
    operand2,
    decimal_places
)`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`division(
    TotalNetAmount,
    20,
    2
) as AverageValue`}
        />

        <TableBlock
          title="Example Results"
          headers={["Expression", "Result"]}
          rows={[
            ["125 / 20", "6.25"],
            ["100 / 8", "12.50"],
            ["50 / 3", "16.67"],
          ]}
        />

        <RealWorldExample title="Percentage Calculation">
          <p>
            Financial reports often calculate ratios, percentages, and average
            values where decimal precision is essential.
          </p>

          <p>
            DIVISION() is the preferred function because it preserves the
            fractional component instead of truncating the result.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="MOD() - Remainder After Integer Division">
        <p>
          The <strong>MOD()</strong> function returns the remainder after
          integer division.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`mod( operand1, operand2 )`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`mod(
    cast( TotalNetAmount as abap.int4 ),
    20
) as Remainder`}
        />

        <TableBlock
          title="Example Results"
          headers={["Expression", "Result"]}
          rows={[
            ["125 MOD 20", "5"],
            ["30 MOD 4", "2"],
            ["100 MOD 8", "4"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          MOD() is strictly an integer arithmetic function. Unlike DIV(), it
          does <strong>not</strong> accept DEC, QUAN, or DECFLOAT data types.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="A Common Compiler Error with MOD()">
        <p>
          Many developers assume that DIV() and MOD() support the same operand
          types. This assumption leads to one of the most common activation
          errors in CDS development.
        </p>

        <CodeBlock
          title="Incorrect Example"
          language="ABAP CDS"
          code={`mod(
    cast( TotalNetAmount as abap.dec(13,2) ),
    20
) as ModAmount`}
        />

        <CodeBlock
          title="Compiler Error"
          code={`Function MOD:
Type DEC not supported by parameter 1.

Expected:
INT1
INT2
INT4
INT8`}
        />

        <p>
          Although <strong>TotalNetAmount</strong> is numeric, MOD() accepts
          only integer data types. Therefore, the expression fails during CDS
          activation.
        </p>

        <CodeBlock
          title="Correct Solution"
          language="ABAP CDS"
          code={`mod(
    cast( TotalNetAmount as abap.int4 ),
    20
) as ModAmount`}
        />
      </ContentSection>

      <ContentSection title="Why Doesn't MOD() Support DEC?">
        <p>
          This restriction is intentional and often discussed in architect
          interviews.
        </p>

        <p>Consider the following calculation:</p>

        <CodeBlock title="Example" code={`25.75 MOD 4 = ?`} />

        <p>Should the answer be:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>1.75</li>
          <li>1</li>
          <li>Another value?</li>
        </ul>

        <p>
          Different databases and programming languages interpret decimal modulo
          operations differently. To avoid ambiguity and ensure consistent
          behavior, ABAP CDS restricts MOD() to integer operands.
        </p>

        <ArchitectNote>
          <strong>Architect Summary</strong>
          <br />
          <br />
          Remember this simple rule:
          <br />
          <br />
          <strong>DIV()</strong> → Integer quotient
          <br />
          <strong>DIVISION()</strong> → Decimal division
          <br />
          <strong>MOD()</strong> → Integer remainder
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="DIV() vs DIVISION() vs MOD()">
        <TableBlock
          title="Comparison"
          headers={[
            "Function",
            "Purpose",
            "Accepts DEC",
            "Accepts QUAN",
            "Accepts DECFLOAT",
          ]}
          rows={[
            ["DIV()", "Integer Quotient", "✅", "✅", "❌"],
            ["DIVISION()", "Decimal Division", "✅", "✅", "✅*"],
            ["MOD()", "Integer Remainder", "❌", "❌", "❌"],
          ]}
        />

        <BestPractice>
          <p>
            Don't assume that DIV() and MOD() support the same operand types.
            Although both are related to division, they serve different purposes
            and have different type restrictions.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <p>
          Numeric functions are easy to use, but developers frequently make
          mistakes because they assume every numeric function supports the same
          data types and behaves identically.
        </p>

        <CommonMistakes
          items={[
            "Assuming DIV() and MOD() support the same operand types.",
            "Using MOD() with DEC or QUAN values.",
            "Using DIV() when decimal precision is required.",
            "Using CEIL() or FLOOR() instead of ROUND() for financial calculations.",
            "Ignoring the supported data types of individual numeric functions.",
            "Performing calculations in ABAP that can be pushed down to SAP HANA.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Common Compiler Errors">
        <p>
          The following compiler errors are frequently encountered while working
          with numeric functions in CDS View Entities.
        </p>

        <CodeBlock
          title="Compiler Error 1"
          code={`Function MOD:
Type DEC not supported by parameter 1.`}
        />

        <p>
          <strong>Reason:</strong> MOD() accepts only integer data types (
          <strong>INT1</strong>, <strong>INT2</strong>,<strong>INT4</strong>,
          and <strong>INT8</strong>).
        </p>

        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`mod(
    cast( TotalNetAmount as abap.dec(13,2) ),
    20
)`}
        />

        <CodeBlock
          title="Correct"
          language="ABAP CDS"
          code={`mod(
    cast( TotalNetAmount as abap.int4 ),
    20
)`}
        />

        <CodeBlock
          title="Compiler Error 2"
          code={`Function DIV:
Type DECFLOAT34 not supported.`}
        />

        <p>
          <strong>Reason:</strong> DIV() supports integer, DEC, and QUAN data
          types but does not support DECFLOAT operands.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Always verify the supported operand types in the CDS documentation or
          ADT code completion before assuming two numeric functions behave the
          same way.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Choosing the Right Numeric Function">
        <TableBlock
          title="Function Selection Guide"
          headers={["Requirement", "Recommended Function"]}
          rows={[
            ["Remove negative sign", "ABS()"],
            ["Round upward", "CEIL()"],
            ["Round downward", "FLOOR()"],
            ["Normal mathematical rounding", "ROUND()"],
            ["Integer quotient", "DIV()"],
            ["Decimal division", "DIVISION()"],
            ["Integer remainder", "MOD()"],
          ]}
        />

        <BestPractice>
          <p>
            Choose the function based on the required business result rather
            than simply selecting the first function that compiles.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Performance Considerations">
        <p>
          Numeric functions are executed directly in SAP HANA as part of the
          generated SQL statement. This allows calculations to benefit from code
          pushdown and minimizes application server processing.
        </p>

        <TableBlock
          title="Performance Recommendations"
          headers={["Recommendation", "Reason"]}
          rows={[
            [
              "Perform calculations in CDS whenever possible.",
              "Reduces ABAP processing.",
            ],
            ["Avoid duplicate calculations.", "Improves maintainability."],
            [
              "Use DIVISION() when decimal precision matters.",
              "Prevents unnecessary post-processing.",
            ],
            [
              "Keep expressions readable.",
              "Makes CDS Views easier to maintain.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is the difference between CEIL() and FLOOR()?"
          answer="CEIL() always rounds upward to the next integer, whereas FLOOR() always rounds downward to the previous integer."
        />

        <InterviewQuestion
          level="Beginner"
          question="Which function returns the absolute value of a number?"
          answer="ABS() removes the sign and returns the absolute value."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between DIV() and DIVISION()?"
          answer="DIV() returns only the integer quotient, whereas DIVISION() performs decimal division and preserves the fractional part."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why does MOD() reject DEC values?"
          answer="MOD() is defined as an integer arithmetic function. To avoid ambiguity in decimal remainder calculations, ABAP CDS restricts it to integer operands."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can DIV() and MOD() be used interchangeably?"
          answer="No. Although both relate to division, DIV() returns the quotient while MOD() returns the remainder, and they support different operand types."
        />

        <InterviewQuestion
          level="Experienced"
          question="When would you choose DIVISION() over DIV()?"
          answer="Whenever decimal precision is required, such as ratios, percentages, averages, or financial calculations."
        />

        <InterviewQuestion
          level="Architect"
          question="Why are numeric functions recommended in CDS instead of ABAP?"
          answer="They execute directly in SAP HANA, enabling code pushdown, reducing data transfer, and improving performance."
        />

        <InterviewQuestion
          level="Architect"
          question="What is one common misconception about MOD()?"
          answer="Many developers assume MOD() supports DEC and QUAN because DIV() does. In reality, MOD() supports only integer data types."
        />
      </ContentSection>

      <CheatSheet
        icon="🧮"
        title="Numeric Functions Cheat Sheet"
        stats="7 Functions • Mathematical Operations • SAP HANA Pushdown"
        description="This quick reference summarizes the most commonly used numeric functions in ABAP CDS. Keep it nearby while performing calculations, financial processing, analytical reporting, or preparing for technical interviews."
      >
        <TableBlock
          headers={["Function", "Syntax", "Purpose", "Returns"]}
          rows={[
            ["ABS()", "abs(number)", "Returns the absolute value", "Numeric"],
            [
              "CEIL()",
              "ceil(number)",
              "Rounds upward to the next integer",
              "Integer",
            ],
            [
              "FLOOR()",
              "floor(number)",
              "Rounds downward to the previous integer",
              "Integer",
            ],
            [
              "ROUND()",
              "round(number, decimals)",
              "Rounds to the specified decimal places",
              "Rounded Numeric",
            ],
            [
              "DIV()",
              "div(dividend, divisor)",
              "Returns the integer quotient",
              "Integer",
            ],
            [
              "DIVISION()",
              "division(dividend, divisor, scale)",
              "Performs decimal division with precision",
              "Decimal",
            ],
            [
              "MOD()",
              "mod(dividend, divisor)",
              "Returns the integer remainder",
              "Integer",
            ],
          ]}
        />
      </CheatSheet>

      <KeyTakeaway>
        <p>
          Numeric functions allow SAP HANA to perform mathematical calculations
          directly inside CDS View Entities, reducing the need for ABAP
          post-processing and improving application performance.
        </p>

        <p>
          Understanding the differences between
          <strong> DIV()</strong>, <strong>DIVISION()</strong>, and
          <strong> MOD()</strong> is particularly important because they solve
          different mathematical problems and support different operand types.
        </p>

        <p>
          Always choose the function that best matches the business requirement,
          verify the supported data types, and push calculations to the database
          whenever possible to build clean and production-ready RAP
          applications.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          In the accompanying video, we'll implement every numeric function
          discussed in this lesson using Eclipse ADT and SAP S/4HANA Public
          Cloud. We'll also reproduce common compiler errors, explain why they
          occur, and demonstrate the correct production-ready solutions.
        </p>

        {/* TODO: Replace with YouTube component */}
      </ContentSection>

      <PrevNext
        prevTitle="String Functions"
        prevHref="/tutorials/rap/cds-view-entity/string-functions"
        nextTitle="Date & Time Functions"
        nextHref="/tutorials/rap/cds-view-entity/date-time-functions"
      />
    </TutorialLayout>
  );
}

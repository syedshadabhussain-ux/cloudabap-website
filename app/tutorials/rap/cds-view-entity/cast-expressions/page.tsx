import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import TableBlock from "@/components/tutorials/TableBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import BestPractice from "@/components/tutorials/BestPractice";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import CheatSheet from "@/components/tutorials/CheatSheet";

export default function Page() {
  return (
    <TutorialLayout
      title="CAST Expressions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="55 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every ABAP Cloud Developer Must Master CAST">
        <p>
          As CDS View Entities become more powerful, developers frequently work
          with calculated fields, CASE expressions, string functions,
          aggregations, arithmetic operations, RAP projections, and analytical
          queries. Almost all of these features eventually introduce situations
          where different data types need to work together.
        </p>

        <p>
          This is where <strong>CAST</strong> becomes one of the most important
          expressions available in ABAP CDS.
        </p>

        <p>
          Unfortunately, CAST is also one of the most misunderstood concepts.
          Many developers believe it converts business values such as currencies
          or units of measure, while others use it simply to remove compiler
          errors without understanding why those errors occurred in the first
          place.
        </p>

        <p>
          In reality, CAST performs a very specific task—it changes the
          <strong> technical data type</strong> of an expression during query
          execution. Understanding this distinction is essential for building
          clean, maintainable, and production-ready CDS View Entities in SAP
          S/4HANA Public Cloud.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/cast-expression.webp"
          alt="CAST Expressions in ABAP CDS View Entities"
          caption="CAST changes the technical data type of an expression, enabling compatible calculations, comparisons, and database operations without changing the underlying business value."
        />
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <p>
          By the end of this lesson, you will have a complete understanding of
          how CAST works inside ABAP CDS View Entities and when it should be
          used in real RAP projects.
        </p>

        <TableBlock
          title="After Completing This Lesson You Will Be Able To"
          headers={["Skill", "Description"]}
          rows={[
            ["Understand CAST", "Explain the purpose of CAST in ABAP CDS."],
            [
              "Choose Correct Data Types",
              "Identify when explicit datatype conversion is required.",
            ],
            [
              "Avoid Common Mistakes",
              "Recognize situations where CAST should not be used.",
            ],
            [
              "Model Better CDS Views",
              "Use semantic data elements instead of generic technical types.",
            ],
            [
              "Design Production Solutions",
              "Apply CAST correctly in RAP and S/4HANA Public Cloud development.",
            ],
          ]}
        />

        <BestPractice>
          <p>
            Do not think of CAST as a function that fixes compiler errors.
            Instead, think of it as a design tool that allows you to explicitly
            communicate your intent to the CDS compiler and the SAP HANA
            database.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="The Problem CAST Solves">
        <p>
          Imagine you are building a reporting CDS View that combines data from
          Sales Orders, Billing Documents, Business Partners, and Financial
          Accounting.
        </p>

        <p>
          Some fields contain numbers, some represent business identifiers,
          while others are amounts, quantities, dates, or character strings.
          Although many of these values may look similar when displayed on the
          screen, they are represented internally using completely different
          data types.
        </p>

        <p>
          When CDS evaluates expressions, the database engine expects compatible
          data types. If two operands are incompatible, activation fails with a
          compiler error before the view can even be executed.
        </p>

        <RealWorldExample title="Real Project Scenario">
          <p>
            A reporting application displays Billing Amount, Exchange Rate,
            Customer Number, Company Code, and Sales Order Number in a single
            CDS View.
          </p>

          <p>
            The Billing Amount participates in calculations, the Exchange Rate
            requires high precision, while the Sales Order Number is simply an
            identifier that must preserve leading zeros.
          </p>

          <p>
            Although these values may all appear as numbers on the screen, they
            represent completely different business concepts and therefore use
            different data types internally.
          </p>

          <p>
            Understanding these differences is the first step toward using CAST
            correctly.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Before Learning CAST, Understand This Important Principle">
        <p>
          One of the biggest mistakes developers make is assuming that data
          types are determined by how values look on the screen.
        </p>

        <p>Consider the following examples.</p>

        <TableBlock
          title="Looks Similar, Behaves Completely Differently"
          headers={["Displayed Value", "Business Meaning", "Typical CDS Type"]}
          rows={[
            ["5000001234", "Sales Order", "NUMC / Character-Based Identifier"],
            ["1000", "Company Code", "CHAR / BUKRS"],
            ["12500.75", "Billing Amount", "CURR"],
            ["250.500", "Quantity", "QUAN"],
            ["20260715", "Posting Date", "DATS"],
          ]}
        />

        <p>
          Although all of these values may contain digits, they should never be
          treated as the same kind of data.
        </p>

        <p>
          Some values identify business objects, while others represent monetary
          amounts, quantities, or dates. Each category follows different rules,
          supports different operations, and requires different handling inside
          CDS expressions.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          One of the defining characteristics of experienced SAP developers is
          that they think in terms of <strong>business semantics</strong> rather
          than simply looking at the displayed value.
          <br />
          <br />
          A Sales Order is not a number—it is an identifier.
          <br />
          A Company Code is not an integer—it represents an organizational
          entity.
          <br />
          A Currency Amount is more than a decimal value—it carries monetary
          semantics.
          <br />
          <br />
          Once you begin thinking this way, deciding when to use CAST becomes
          significantly easier.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="What is CAST?">
        <p>
          <strong>CAST</strong> is a built-in ABAP CDS expression that converts
          an expression from one technical data type to another during query
          execution.
        </p>

        <p>
          It tells the CDS compiler and SAP HANA database how a particular
          expression should be interpreted while evaluating the query. CAST does
          not modify the data stored in the underlying database table—it only
          changes the data type of the result returned by the expression.
        </p>

        <CodeBlock
          title="General Syntax"
          language="ABAP CDS"
          code={`cast( expression as target_type )`}
        />

        <p>
          The expression can be a database field, a literal value, a
          calculation, another CDS expression, or the result of a built-in
          function.
        </p>

        <TableBlock
          title="Components of the CAST Expression"
          headers={["Component", "Description"]}
          rows={[
            [
              "expression",
              "The source value whose data type needs to be changed.",
            ],
            [
              "target_type",
              "The built-in data type or semantic data element to which the expression will be converted.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Simple CAST Examples">
        <p>
          Let's begin with a few simple examples before looking at real-world
          business scenarios.
        </p>

        <CodeBlock
          title="Convert a Material Number to a Character Field"
          language="ABAP CDS"
          code={`cast( Material as abap.char(40) ) as Material`}
        />

        <CodeBlock
          title="Convert an Exchange Rate to a High Precision Decimal"
          language="ABAP CDS"
          code={`cast( ExchangeRate as abap.decfloat34 ) as ExchangeRate`}
        />

        <CodeBlock
          title="Convert a Tax Percentage"
          language="ABAP CDS"
          code={`cast( TaxPercent as abap.dec(5,2) ) as TaxPercentage`}
        />

        <p>
          In each example, only the technical data type changes. The business
          meaning of the value remains exactly the same.
        </p>
      </ContentSection>

      <ContentSection title="How CAST Works Internally">
        <p>
          Many developers imagine that CAST physically changes the value stored
          in the database. This is not what happens.
        </p>

        <p>
          During activation, the CDS compiler validates every expression in the
          projection list and determines whether the participating operands are
          compatible. When a CAST expression is encountered, the compiler treats
          the source expression as the specified target data type before passing
          the statement to the SAP HANA database.
        </p>

        <p>
          The original database column is never modified. Only the result of the
          expression is returned using the requested data type.
        </p>

        <ImageBlock
          src="/images/rap/cds-view-entity/cast-expression-02.webp"
          alt="How CAST Works in ABAP CDS"
          caption="CAST changes the technical data type during expression evaluation. The underlying database value remains unchanged."
        />
      </ContentSection>

      <ContentSection title="CAST Evaluation Flow">
        <p>
          The following simplified flow illustrates what happens when a CAST
          expression is executed.
        </p>

        <CodeBlock
          title="Execution Flow"
          code={`Database Field
      │
      ▼
CDS Expression
      │
      ▼
CAST Applies Target Data Type
      │
      ▼
Expression Evaluation
      │
      ▼
Result Returned`}
        />

        <p>
          Notice that the CAST operation happens while the database evaluates
          the expression. It is not a post-processing step performed after the
          query has finished.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Because CAST is evaluated inside the database engine, it fully
          participates in SAP HANA's code pushdown strategy. Instead of fetching
          data into the ABAP application server and performing conversions
          there, the conversion is executed directly where the data resides.
          <br />
          <br />
          This keeps RAP applications scalable and minimizes unnecessary data
          transfer between the database and application layer.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="CDS CAST vs ABAP Assignment">
        <p>
          Developers coming from classical ABAP often compare CAST with moving a
          value from one variable to another using different data types.
        </p>

        <p>
          Although the intention is similar, there is an important difference:
          CDS CAST is part of the SQL expression executed by SAP HANA, whereas
          ABAP assignments are executed in the ABAP application server after the
          database has already returned the data.
        </p>

        <TableBlock
          title="CDS CAST vs ABAP Variable Assignment"
          headers={["ABAP CDS", "ABAP Class"]}
          rows={[
            [
              "Executed inside the database",
              "Executed in the application server",
            ],
            ["Part of the SQL statement", "Part of ABAP program logic"],
            ["Supports code pushdown", "Occurs after data retrieval"],
            ["Optimized by SAP HANA", "Processed by the ABAP runtime"],
          ]}
        />

        <BestPractice>
          <p>
            Whenever a data type conversion is required as part of a CDS
            expression, perform it inside the CDS View Entity using CAST rather
            than retrieving the data first and converting it later in ABAP. This
            follows SAP's code pushdown principle and typically results in
            better performance.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Why Do We Need CAST?">
        <p>
          At first glance, CAST may seem like a feature that is only required in
          complex CDS Views. In reality, almost every production-grade RAP
          application eventually uses CAST somewhere in its data model.
        </p>

        <p>
          As CDS Views become more sophisticated, developers begin combining
          fields with different technical data types inside calculations,
          conditional logic, string functions, aggregate expressions, and UNION
          statements. These operations require compatible data types, and that
          is precisely where CAST becomes essential.
        </p>

        <TableBlock
          title="Common Situations Where CAST is Used"
          headers={["Scenario", "Why CAST is Required"]}
          rows={[
            [
              "CASE Expressions",
              "Ensure all branches return compatible data types.",
            ],
            [
              "Arithmetic Calculations",
              "Convert operands into compatible numeric types.",
            ],
            [
              "String Functions",
              "Convert values into character-based data types.",
            ],
            [
              "Aggregate Functions",
              "Prepare expressions for SUM(), AVG(), and similar functions.",
            ],
            [
              "UNION",
              "Both SELECT statements must return compatible data types.",
            ],
            [
              "RAP Projection Views",
              "Expose the required data type to consuming applications.",
            ],
            [
              "OData Services",
              "Return values using the expected technical type.",
            ],
          ]}
        />

        <BestPractice>
          <p>
            Treat CAST as part of your CDS design rather than a workaround for
            compiler errors. Well-designed CAST expressions make your intent
            explicit and improve the readability of your data model.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Real SAP Example: Sales Order Number">
        <p>
          One of the most common misconceptions among new SAP developers is
          assuming that a Sales Order is a numeric value simply because it
          contains only digits.
        </p>

        <CodeBlock title="Sales Order" code={`5000001234`} />

        <p>
          Although it looks like an integer, a Sales Order is not intended for
          mathematical calculations.
        </p>

        <p>
          It is a <strong>business identifier</strong>. Its purpose is to
          uniquely identify a business document—not to participate in arithmetic
          expressions.
        </p>

        <RealWorldExample title="Production Scenario">
          <p>
            Imagine a Fiori application displaying thousands of Sales Orders.
          </p>

          <p>
            The application filters, searches, sorts, and navigates using the
            Sales Order number, but it never performs calculations such as:
          </p>

          <CodeBlock language="ABAP CDS" code={`SalesOrder + 1`} />

          <p>
            Such an operation has no business meaning because document numbers
            are identifiers rather than measurable values.
          </p>
        </RealWorldExample>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          A useful habit is to ask yourself one simple question whenever you
          encounter a field:
          <br />
          <br />
          <strong>
            "Does this value identify something, or does it measure something?"
          </strong>
          <br />
          <br />
          If it identifies a business object, it is usually character-based. If
          it measures something such as an amount, quantity, percentage, or
          exchange rate, it is generally numeric.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Real SAP Example: Company Code">
        <p>Consider another value that often causes confusion.</p>

        <CodeBlock title="Company Code" code={`1000`} />

        <p>
          Again, the value consists entirely of digits, yet Company Code is not
          an integer.
        </p>

        <p>
          It represents an organizational unit within SAP and is modeled using
          the semantic data element <strong>BUKRS</strong>, whose underlying
          technical representation is character-based.
        </p>

        <TableBlock
          title="Business Meaning vs Technical Representation"
          headers={["Business Object", "Looks Like", "Actually Represents"]}
          rows={[
            ["Sales Order", "Number", "Business Identifier"],
            ["Purchase Order", "Number", "Business Identifier"],
            ["Company Code", "Number", "Organizational Identifier"],
            ["Material Number", "Number", "Business Identifier"],
            ["Customer", "Number", "Business Partner Identifier"],
            ["Supplier", "Number", "Business Partner Identifier"],
          ]}
        />

        <p>
          Treating these fields as numeric values can introduce incorrect
          assumptions into your CDS design and often results in unnecessary CAST
          expressions later in the development process.
        </p>
      </ContentSection>

      <ContentSection title="Real SAP Example: Monetary Amount">
        <p>Now compare the previous examples with a billing amount.</p>

        <CodeBlock title="Billing Amount" code={`12500.75 INR`} />

        <p>
          Unlike a Sales Order or Company Code, this value represents a
          measurable amount of money. It participates in calculations,
          aggregations, currency conversion, and financial reporting.
        </p>

        <p>
          Because it represents a measurable quantity, numeric operations make
          perfect sense.
        </p>

        <CodeBlock language="ABAP CDS" code={`NetAmount * ExchangeRate`} />

        <p>
          This distinction is extremely important because developers often
          assume that every value containing digits behaves the same way.
          Business semantics determine how a field should be treated—not its
          appearance.
        </p>

        <BestPractice>
          <p>
            Before introducing a CAST expression, first understand the business
            meaning of the field. CAST should solve a technical compatibility
            problem—not compensate for an incorrect understanding of the data.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="The Most Important Rule: CAST Changes the Data Type, Not the Business Value">
        <p>
          If you remember only one concept from this lesson, make it this one:
        </p>

        <ArchitectNote>
          <strong>
            CAST changes the technical data type of an expression.
          </strong>
          <br />
          <br />
          <strong>CAST does NOT change the business value.</strong>
        </ArchitectNote>

        <p>
          This distinction is frequently misunderstood. Many developers assume
          that CAST performs business conversions such as changing one currency
          into another or converting kilograms into pounds.
        </p>

        <p>It does not.</p>

        <p>
          CAST simply tells the CDS compiler and SAP HANA how the expression
          should be interpreted while the SQL statement is being executed.
        </p>
      </ContentSection>

      <ContentSection title="Example: Currency Amount">
        <p>Consider the following billing document.</p>

        <CodeBlock
          title="Billing Document"
          code={`Net Amount : 1,000.00
Currency   : USD`}
        />

        <p>
          A common misconception is that the following expression converts the
          amount into another currency.
        </p>

        <CodeBlock
          title="Incorrect Assumption"
          language="ABAP CDS"
          code={`cast(
    NetAmount
    as abap.curr(15,2)
) as NetAmount`}
        />

        <p>
          This expression does <strong>not</strong> convert USD into INR.
        </p>

        <TableBlock
          title="What Actually Happens?"
          headers={["Before CAST", "After CAST"]}
          rows={[
            ["1,000.00 USD", "Exactly the same business value"],
            ["Same Currency", "Same Currency"],
            [
              "Only the technical type changes",
              "Business meaning remains unchanged",
            ],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Think of CAST as changing the shape of the container—not the contents
          inside it.
          <br />
          <br />
          The value remains exactly the same. Only its technical representation
          changes during expression evaluation.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Business Conversion Requires Dedicated CDS Functions">
        <p>
          Business conversions involve calculations based on business rules,
          exchange rates, or unit conversion tables. These operations are far
          more complex than simply changing a data type.
        </p>

        <TableBlock
          title="Choose the Correct Function"
          headers={["Requirement", "Correct Solution", "Purpose"]}
          rows={[
            ["Change technical data type", "CAST", "Technical conversion only"],
            [
              "Convert USD to INR",
              "currency_conversion()",
              "Business currency conversion",
            ],
            [
              "Convert KG to LB",
              "unit_conversion()",
              "Business unit conversion",
            ],
            [
              "Prepare Amount for Calculation",
              "CAST (when required)",
              "Data type compatibility",
            ],
            [
              "Prepare Quantity for Mathematical Expression",
              "CAST (when required)",
              "Data type compatibility",
            ],
          ]}
        />

        <BestPractice>
          <p>
            Always ask yourself whether you are trying to change the
            <strong> data type</strong> or the
            <strong> business value</strong>.
            <br />
            <br />
            If the business value itself must change, CAST is almost certainly
            the wrong solution.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Real-World Example: Finance Reporting">
        <RealWorldExample title="Financial Dashboard">
          <p>
            A finance dashboard displays invoice amounts in the company code
            currency while also calculating tax percentages and profit margins.
          </p>

          <p>
            During these calculations, developers may need compatible numeric
            data types for arithmetic expressions.
          </p>

          <CodeBlock
            language="ABAP CDS"
            code={`cast(
    NetAmount
    as abap.dec(15,2)
) as NetAmount`}
          />

          <p>Here, CAST prepares the expression for calculation.</p>

          <p>
            The invoice amount remains exactly the same. No currency conversion
            takes place.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Real-World Example: Warehouse Management">
        <RealWorldExample title="Inventory Reporting">
          <p>
            Suppose a warehouse report stores inventory quantities in kilograms.
          </p>

          <CodeBlock title="Stored Value" code={`250.500 KG`} />

          <p>The following CAST expression:</p>

          <CodeBlock
            language="ABAP CDS"
            code={`cast(
    Quantity
    as abap.quan(13,3)
) as Quantity`}
          />

          <p>does not convert kilograms into pounds.</p>

          <p>
            If the business requirement is to display quantities in pounds, SAP
            provides the dedicated CDS function:
          </p>

          <CodeBlock
            language="ABAP CDS"
            code={`unit_conversion(
    quantity    => Quantity,
    source_unit => BaseUnit,
    target_unit => cast( 'LB' as abap.unit )
)`}
          />
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Decision Guide: Which Function Should You Use?">
        <TableBlock
          title="Technical Conversion vs Business Conversion"
          headers={[
            "Business Requirement",
            "Use CAST",
            "Use Conversion Function",
          ]}
          rows={[
            ["Change data type", "✅", ""],
            ["Prepare values for CASE", "✅", ""],
            ["Prepare values for arithmetic", "✅", ""],
            ["Convert USD to EUR", "", "✅ currency_conversion()"],
            ["Convert KG to LB", "", "✅ unit_conversion()"],
            ["Apply exchange rate", "", "✅ currency_conversion()"],
            ["Convert units of measure", "", "✅ unit_conversion()"],
          ]}
        />

        <CommonMistakes
          items={[
            "Assuming CAST converts business values.",
            "Using CAST instead of currency_conversion().",
            "Using CAST instead of unit_conversion().",
            "Thinking CAST modifies the database value.",
            "Confusing technical conversion with business conversion.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Built-in Data Types vs Semantic Data Elements">
        <p>
          Up to this point, we have used built-in data types such as
          <strong> abap.char()</strong>, <strong>abap.dec()</strong>, and
          <strong> abap.int4</strong> as CAST targets. Although these types are
          perfectly valid, they are not always the best choice.
        </p>

        <p>
          SAP provides thousands of predefined{" "}
          <strong>semantic data elements</strong>
          that represent real business concepts such as Company Code, Material,
          Customer, Supplier, Currency, and Unit of Measure.
        </p>

        <p>
          Whenever your expression represents one of these business concepts,
          using the corresponding semantic data element makes your CDS model
          easier to understand and aligns it with SAP's Virtual Data Model
          (VDM).
        </p>

        <TableBlock
          title="Built-in Types vs Semantic Data Elements"
          headers={[
            "Business Concept",
            "Built-in Type",
            "Preferred Semantic Data Element",
          ]}
          rows={[
            ["Company Code", "abap.char(4)", "BUKRS"],
            ["Plant", "abap.char(4)", "WERKS_D"],
            ["Storage Location", "abap.char(4)", "LGORT_D"],
            ["Material", "abap.char(40)", "MATNR"],
            ["Customer", "abap.char(10)", "KUNNR"],
            ["Supplier", "abap.char(10)", "LIFNR"],
            ["Currency", "abap.cuky", "WAERS"],
            ["Unit of Measure", "abap.unit", "MEINS"],
            ["Quantity", "abap.quan(13,3)", "MENGE_D"],
            ["Sales Order", "abap.numc(10)", "VBELN_VA"],
            ["Purchase Order", "abap.numc(10)", "EBELN"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Why Semantic Data Elements Are Preferred">
        <p>Consider the following two CAST expressions.</p>

        <CodeBlock
          title="Using a Built-in Data Type"
          language="ABAP CDS"
          code={`cast(
    CompanyCode
    as abap.char(4)
) as CompanyCode`}
        />

        <CodeBlock
          title="Using a Semantic Data Element"
          language="ABAP CDS"
          code={`cast(
    CompanyCode
    as BUKRS
) as CompanyCode`}
        />

        <p>
          Technically, both expressions may produce values with the same length.
          However, they communicate very different intentions.
        </p>

        <p>
          The first expression simply states that the result is a four-character
          field.
        </p>

        <p>
          The second clearly communicates that the value represents a
          <strong> Company Code</strong>, preserving the business semantics of
          the data.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Experienced SAP developers model business concepts—not just technical
          data types.
          <br />
          <br />A developer reading <strong>BUKRS</strong> immediately
          understands the purpose of the field.
          <br />
          <br />A developer reading <strong>abap.char(4)</strong> only knows the
          field contains four characters.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Real-World Example: Financial Reporting">
        <RealWorldExample title="Invoice Analytics CDS">
          <p>
            A finance reporting CDS View exposes Company Code, Billing Amount,
            Currency, Customer, and Material information to a Fiori analytical
            application.
          </p>

          <p>
            Although Company Code could technically be exposed using
            <strong> abap.char(4)</strong>, using
            <strong> BUKRS</strong> immediately tells every developer,
            consultant, and architect what the field represents.
          </p>

          <p>
            This makes the CDS View easier to understand, easier to maintain,
            and more consistent with SAP standard interface views.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Whenever SAP already provides a semantic data element that matches
            your business concept, prefer it over a generic built-in data type.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="CDS Type Syntax vs ABAP Class Syntax">
        <p>
          Developers frequently move between CDS View Entities and ABAP Classes.
          Although the concepts are similar, the syntax differs significantly.
        </p>

        <TableBlock
          title="CDS vs ABAP Type Declaration"
          headers={["Business Type", "CDS View Entity", "ABAP Class"]}
          rows={[
            ["Character", "abap.char(10)", "TYPE c LENGTH 10"],
            ["Numeric Character", "abap.numc(10)", "TYPE n LENGTH 10"],
            ["Integer", "abap.int4", "TYPE int4"],
            ["Packed Decimal", "abap.dec(15,2)", "TYPE p LENGTH 8 DECIMALS 2"],
            ["Decimal Float", "abap.decfloat34", "TYPE decfloat34"],
            ["String", "abap.string", "TYPE string"],
            ["Date", "abap.dats", "TYPE d"],
            ["Time", "abap.tims", "TYPE t"],
            ["Currency", "abap.cuky", "TYPE waers"],
            ["Unit", "abap.unit", "TYPE meins"],
          ]}
        />

        <p>
          Understanding both syntaxes is important because RAP development
          regularly alternates between CDS View Entities and ABAP implementation
          classes.
        </p>
      </ContentSection>

      <ContentSection title="Choosing the Right CAST Target">
        <p>
          Selecting the target type is not simply about making the compiler
          happy. The chosen type should accurately reflect the business meaning
          of the resulting value.
        </p>

        <TableBlock
          title="Recommended CAST Targets"
          headers={["Scenario", "Recommended Target", "Reason"]}
          rows={[
            ["Company Code", "BUKRS", "Preserves business semantics"],
            ["Material", "MATNR", "Matches SAP standard data model"],
            ["Currency Key", "WAERS", "Clearly represents currency"],
            ["Unit of Measure", "MEINS", "Maintains unit semantics"],
            [
              "Generic Character Data",
              "abap.char()",
              "When no semantic element exists",
            ],
            [
              "Numeric Calculation",
              "abap.dec() / abap.decfloat34",
              "Suitable for arithmetic operations",
            ],
          ]}
        />

        <CommonMistakes
          items={[
            "Casting every character field to abap.char() even when a semantic data element exists.",
            "Choosing target types purely based on length instead of business meaning.",
            "Ignoring SAP's standard semantic data elements.",
            "Assuming semantic data elements behave differently from their technical types during execution.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Real-World CAST Scenarios">
        <p>
          In real projects, CAST is rarely used in isolation. It usually appears
          inside calculations, conditional expressions, reporting views, RAP
          projections, analytical queries, and OData services.
        </p>

        <p>
          Let's look at some common scenarios where experienced SAP developers
          use CAST to create clean and production-ready CDS View Entities.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 1: Financial Reporting">
        <RealWorldExample title="Billing Analytics">
          <p>
            A finance reporting CDS View displays invoice amounts together with
            calculated tax percentages and profit margins.
          </p>

          <p>
            Before participating in arithmetic calculations, the amount may need
            to be represented using a compatible numeric data type.
          </p>

          <CodeBlock
            title="Preparing an Amount for Calculation"
            language="ABAP CDS"
            code={`cast(
    NetAmount
    as abap.dec(15,2)
) as NetAmount`}
          />

          <p>
            Notice that the invoice amount itself does not change. CAST simply
            prepares the expression so it can safely participate in subsequent
            calculations.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Use CAST to make arithmetic expressions compatible—not to perform
            financial calculations themselves.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Scenario 2: CASE Expressions">
        <p>
          Every branch of a CASE expression must return compatible data types.
          If different branches return different types, the CDS compiler cannot
          determine the final result type.
        </p>

        <CodeBlock
          title="Using CAST inside CASE"
          language="ABAP CDS"
          code={`case
    when OverallSDProcessStatus = 'C'
        then cast( 'Completed' as abap.char(15) )
    when OverallSDProcessStatus = 'B'
        then cast( 'In Process' as abap.char(15) )
    else
        cast( 'Open' as abap.char(15) )
end as StatusText`}
        />

        <p>
          Explicitly casting each branch makes the result predictable and avoids
          data type inconsistencies.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          CAST is commonly used inside CASE expressions because the compiler
          must determine a single result type for the entire expression before
          activation.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Scenario 3: Preparing Values for String Functions">
        <p>
          String functions expect character-based input. If the source
          expression is not already compatible, CAST may be required before the
          function can be evaluated.
        </p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`upper(
    cast(
        Supplier
        as abap.char(10)
    )
) as SupplierUpper`}
        />

        <p>
          Here, CAST ensures that the input expression is treated as character
          data before the <strong>UPPER()</strong> function is applied.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 4: UNION Compatibility">
        <p>
          Both SELECT statements participating in a UNION must expose compatible
          data types for corresponding columns.
        </p>

        <p>
          If one side returns a different technical type, CAST can be used to
          align the structures.
        </p>

        <CodeBlock
          title="Simplified Example"
          language="ABAP CDS"
          code={`cast(
    CompanyCode
    as BUKRS
) as CompanyCode`}
        />

        <p>
          This ensures that both branches of the UNION expose identical
          technical definitions.
        </p>

        <BestPractice>
          <p>
            Whenever UNION reports data type incompatibility, review the data
            model first. Use CAST only after confirming that both columns
            represent the same business concept.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Scenario 5: RAP Projection Views">
        <RealWorldExample title="Exposing Business Data">
          <p>
            Interface CDS Views are often reused by multiple RAP Business
            Objects. Projection Views expose only the fields required by the
            consuming application.
          </p>

          <p>
            During this projection, CAST can be used to expose the desired
            technical representation without modifying the underlying interface
            view.
          </p>

          <CodeBlock
            language="ABAP CDS"
            code={`cast(
    CompanyCode
    as BUKRS
) as CompanyCode`}
          />
        </RealWorldExample>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Avoid using CAST to compensate for incorrect Interface CDS design. If
          the source model itself is incorrect, fixing it at the Interface View
          level is usually preferable to repeatedly casting fields in every
          consuming Projection View.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Scenario 6: Preparing Data for OData Services">
        <p>
          CDS View Entities frequently serve as the foundation for RAP services
          and OData APIs.
        </p>

        <p>
          The exposed metadata depends on the data types defined in the CDS
          projection. CAST can therefore influence how client applications
          interpret the returned values.
        </p>

        <RealWorldExample title="API Development">
          <p>
            An external consumer expects a field to be exposed using a specific
            technical type. Instead of changing the underlying persistence
            object, the Projection View can expose the required representation
            using CAST.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Summary of Common Production Scenarios">
        <TableBlock
          title="Where CAST is Commonly Used"
          headers={["Scenario", "Purpose of CAST", "Typical Usage"]}
          rows={[
            [
              "Financial Reporting",
              "Prepare numeric calculations",
              "Tax, Margin, Discounts",
            ],
            [
              "CASE Expressions",
              "Return compatible result types",
              "Status Descriptions",
            ],
            [
              "String Functions",
              "Provide character input",
              "UPPER(), LOWER(), CONCAT()",
            ],
            ["UNION", "Align compatible columns", "Combined Reports"],
            ["Projection Views", "Expose desired technical type", "RAP"],
            ["OData Services", "Control exposed metadata", "API Development"],
          ]}
        />

        <BestPractice>
          <p>
            CAST should improve the clarity and compatibility of your CDS View.
            If you find yourself adding CAST to almost every field, it's often a
            sign that the underlying data model should be reviewed.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Advanced CAST Usage">
        <p>
          Up to this point, we have used CAST in relatively simple expressions.
          In production CDS Views, however, CAST is frequently combined with
          arithmetic operations, aggregate functions, CASE expressions, and
          layered VDM models.
        </p>

        <p>
          Understanding these advanced scenarios helps you design CDS View
          Entities that are easier to maintain, easier to extend, and better
          optimized for SAP HANA.
        </p>
      </ContentSection>

      <ContentSection title="Using CAST in Arithmetic Expressions">
        <p>
          Arithmetic expressions require compatible numeric data types.
          Depending on the source fields, CAST may be required before the
          calculation can be evaluated correctly.
        </p>

        <CodeBlock
          title="Preparing an Amount for Calculation"
          language="ABAP CDS"
          code={`cast(
    NetAmount
    as abap.dec(15,2)
) * ExchangeRate as ConvertedAmount`}
        />

        <p>
          In this example, CAST ensures that the first operand participates in
          the multiplication using the required numeric representation.
        </p>

        <RealWorldExample title="Financial Analytics">
          <p>
            A reporting CDS View calculates gross profit, discounts, taxes, and
            profit margins. These calculations often combine values originating
            from different business objects and technical types.
          </p>

          <p>
            Explicit CAST expressions make the calculation easier to understand
            and reduce the likelihood of compiler errors caused by incompatible
            operand types.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Using CAST with Aggregate Functions">
        <p>
          Aggregate functions such as <strong>SUM()</strong>,
          <strong> AVG()</strong>, <strong>MIN()</strong>, and
          <strong> MAX()</strong> operate on compatible data types.
        </p>

        <p>
          Depending on the source expression, CAST may be used before applying
          the aggregate function.
        </p>

        <CodeBlock
          title="Aggregate Example"
          language="ABAP CDS"
          code={`sum(
    cast(
        NetAmount
        as abap.dec(15,2)
    )
) as TotalNetAmount`}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          CAST is generally applied <strong>before</strong> the aggregation so
          that the database performs the calculation using the intended data
          type.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Using CAST with GROUP BY and HAVING">
        <p>
          CAST is often used together with aggregated CDS Views. However,
          developers should remember that CAST does not remove the normal SQL
          rules governing GROUP BY and HAVING clauses.
        </p>

        <RealWorldExample title="Sales Summary Report">
          <p>
            A CDS View groups Billing Documents by Company Code and calculates
            the total billing amount for each company.
          </p>

          <CodeBlock
            language="ABAP CDS"
            code={`sum(
    cast(
        NetAmount
        as abap.dec(15,2)
    )
) as TotalAmount`}
          />

          <p>
            The CAST expression prepares the amount for aggregation, while the
            GROUP BY clause still controls how the records are grouped.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Think of CAST and GROUP BY as solving two different problems. CAST
            controls the data type of an expression, whereas GROUP BY determines
            how rows are aggregated.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Why Can't You Reuse an Alias?">
        <p>
          One of the most common questions asked by CDS developers is why an
          alias defined earlier in the projection list cannot be referenced by
          another expression in the same SELECT statement.
        </p>

        <CodeBlock
          title="This Does Not Work"
          language="ABAP CDS"
          code={`cast(
    NetAmount
    as abap.dec(15,2)
) as Amount,

cast(
    Amount
    as abap.char(20)
) as AmountText`}
        />

        <p>
          Although this looks perfectly reasonable, CDS activation fails because
          aliases are not available to other expressions within the same
          projection list.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          CDS evaluates all projection expressions in parallel rather than
          sequentially.
          <br />
          <br />
          Since every expression is evaluated independently, the alias
          <strong> Amount</strong> does not yet exist when the second CAST
          expression is parsed.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Recommended Solution: Layer Your CDS Views">
        <p>
          Instead of creating long projection lists with complex nested
          expressions, SAP recommends breaking the logic into multiple CDS
          layers.
        </p>

        <CodeBlock
          title="Recommended Design"
          code={`Interface View
        │
        ▼
Composite View
        │
        ▼
Projection View
        │
        ▼
Consumption / RAP Service`}
        />

        <p>
          The first layer performs calculations and creates reusable aliases.
          Subsequent layers consume those aliases without repeating complex
          expressions.
        </p>

        <RealWorldExample title="Production Design">
          <p>
            An Interface CDS calculates the billing amount once. A Composite CDS
            performs additional calculations. Finally, the Projection View
            exposes the required fields to the RAP Business Object.
          </p>

          <p>
            This layered approach keeps every CDS View focused on a single
            responsibility and significantly improves readability.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Whenever you find yourself repeating the same CAST expression
            multiple times, consider moving that calculation into a lower CDS
            layer instead of duplicating logic throughout the model.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Performance Considerations">
        <p>
          CAST participates in SAP HANA's code pushdown mechanism and is
          generally inexpensive when used appropriately.
        </p>

        <p>
          Nevertheless, unnecessary CAST expressions can make a CDS View more
          difficult to read and may indicate opportunities to simplify the
          underlying model.
        </p>

        <TableBlock
          title="Performance Recommendations"
          headers={["Recommendation", "Reason"]}
          rows={[
            ["Cast only when necessary", "Avoid unnecessary complexity."],
            [
              "Prefer semantic target types",
              "Improves readability and maintainability.",
            ],
            ["Layer complex calculations", "Reduces duplicated logic."],
            ["Keep calculations in CDS", "Supports SAP HANA code pushdown."],
            [
              "Review the source model first",
              "Repeated CAST expressions often indicate modelling issues.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Common Compiler Errors and How to Fix Them">
        <p>
          Every SAP developer eventually encounters compiler errors while
          building CDS View Entities. Most of these errors are not caused by
          incorrect syntax—they occur because the participating expressions use
          incompatible data types.
        </p>

        <p>
          Rather than memorizing individual error messages, it's much more
          useful to understand <strong>why</strong> the compiler rejects a
          particular expression. Once you understand the underlying type system,
          most CAST-related errors become straightforward to resolve.
        </p>
      </ContentSection>

      <ContentSection title="Error 1: Function DIV - Type DECFLOAT34 Not Supported">
        <RealWorldExample title="Compiler Error">
          <CodeBlock
            language="ABAP CDS"
            code={`div(
    cast(
        NetAmount
        as abap.decfloat34
    ),
    10
)`}
          />

          <p>
            Activating this CDS View results in a compiler error similar to:
          </p>

          <CodeBlock
            title="Compiler Error"
            code={`Function DIV:
Type DECFLOAT34 is not supported.`}
          />
        </RealWorldExample>

        <p>
          The <strong>DIV()</strong> function performs integer division and only
          supports specific numeric data types. Although
          <strong> DECFLOAT34</strong> is numeric, it is intentionally excluded
          because DIV is designed for integer-style arithmetic.
        </p>

        <ArchitectNote>
          <strong>Why does this happen?</strong>
          <br />
          <br />
          Developers often assume that every numeric type can be used with every
          mathematical function.
          <br />
          <br />
          In reality, each CDS function defines its own supported input types.
        </ArchitectNote>

        <BestPractice>
          <p>
            If decimal precision is required, use
            <strong> DIVISION()</strong> instead of <strong>DIV()</strong>.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Error 2: Function MOD - Type DEC Not Supported">
        <RealWorldExample title="Compiler Error">
          <CodeBlock
            language="ABAP CDS"
            code={`mod(
    cast(
        NetAmount
        as abap.dec(15,2)
    ),
    10
)`}
          />

          <CodeBlock
            title="Compiler Error"
            code={`Function MOD:
Type DEC is not supported.`}
          />
        </RealWorldExample>

        <p>
          <strong>MOD()</strong> calculates the remainder after integer
          division. Since decimal values can produce fractional remainders, CDS
          restricts MOD to integer-compatible data types.
        </p>

        <TableBlock
          title="Supported by MOD()"
          headers={["Supported", "Not Supported"]}
          rows={[
            ["INT1", "DEC"],
            ["INT2", "CURR"],
            ["INT4", "QUAN"],
            ["INT8", "DECFLOAT16"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Error 3: CASE Branches Return Different Data Types">
        <p>
          Every branch of a CASE expression must return a compatible data type.
        </p>

        <CodeBlock
          title="Incorrect Example"
          language="ABAP CDS"
          code={`case
    when OverallSDProcessStatus = 'C'
         then 'Completed'
    else
         NetAmount
end`}
        />

        <p>
          In this example, one branch returns character data while the other
          returns a numeric amount. Since CDS cannot determine a single result
          type, activation fails.
        </p>

        <BestPractice>
          <p>
            Ensure every branch returns the same or a compatible data type. CAST
            can be used when necessary to make the result type explicit.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Error 4: CAST Combination Not Supported">
        <p>Not every source type can be converted into every target type.</p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`cast(
    UUID
    as abap.char(20)
)`}
        />

        <p>
          Depending on the source and target types, CDS may reject the
          conversion because no valid conversion rule exists.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Always verify that the requested conversion is supported.
          <br />
          <br />
          Just because two values can be displayed similarly does not mean CDS
          allows direct conversion between their technical data types.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Error 5: Alias Cannot Be Referenced">
        <CodeBlock
          title="Incorrect Example"
          language="ABAP CDS"
          code={`cast(
    NetAmount
    as abap.dec(15,2)
) as Amount,

cast(
    Amount
    as abap.char(20)
) as AmountText`}
        />

        <p>
          CDS evaluates every projection expression independently. Therefore,
          aliases are not available to other expressions within the same
          projection list.
        </p>

        <BestPractice>
          <p>
            Move the first calculation into a lower CDS View and reference it
            from a higher layer instead of repeating the same expression.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Error 6: Confusing CAST with Currency Conversion">
        <RealWorldExample title="Common Mistake">
          <CodeBlock
            language="ABAP CDS"
            code={`cast(
    NetAmount
    as abap.curr(15,2)
)`}
          />

          <p>
            Developers sometimes expect this expression to convert one currency
            into another.
          </p>
        </RealWorldExample>

        <TableBlock
          title="Correct Solution"
          headers={["Requirement", "Correct Function"]}
          rows={[
            ["Change technical data type", "CAST"],
            ["Convert USD to EUR", "currency_conversion()"],
            ["Convert KG to LB", "unit_conversion()"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Checklist Before Using CAST">
        <TableBlock
          title="Developer Checklist"
          headers={["Question", "Recommendation"]}
          rows={[
            [
              "Am I changing the data type or the business value?",
              "If the business value changes, CAST is probably not the correct solution.",
            ],
            [
              "Does SAP already provide a semantic data element?",
              "Prefer semantic types such as BUKRS, MATNR, WAERS, and MEINS.",
            ],
            [
              "Can the calculation be moved into a lower CDS layer?",
              "Avoid repeating complex CAST expressions.",
            ],
            [
              "Are all participating expressions compatible?",
              "Review the source data types before introducing CAST.",
            ],
            [
              "Am I solving the actual problem?",
              "Don't use CAST simply to suppress compiler errors.",
            ],
          ]}
        />

        <CommonMistakes
          items={[
            "Using CAST as a workaround without understanding the compiler error.",
            "Expecting CAST to perform currency or unit conversion.",
            "Casting every field instead of reviewing the underlying data model.",
            "Ignoring semantic data elements.",
            "Creating overly complex expressions instead of layering CDS Views.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Interview Questions">
        <p>
          The following questions are commonly asked in interviews for ABAP
          Cloud, RAP, S/4HANA Public Cloud, and Senior Technical Consultant
          roles. They test not only your understanding of CAST syntax but also
          your ability to make correct architectural decisions.
        </p>

        <InterviewQuestion
          level="Beginner"
          question="What is the purpose of CAST in ABAP CDS?"
          answer="CAST changes the technical data type of an expression during query execution. It enables compatible calculations, comparisons, CASE expressions, UNION operations, and other CDS expressions without modifying the underlying database value."
        />

        <InterviewQuestion
          level="Beginner"
          question="Does CAST modify the value stored in the database?"
          answer="No. CAST affects only the result of the expression during query execution. The original value stored in the database remains unchanged."
        />

        <InterviewQuestion
          level="Beginner"
          question="Can CAST be used to convert USD into EUR?"
          answer="No. CAST changes only the technical data type. Business conversions such as currency conversion must use the CDS function currency_conversion()."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why do CASE expressions frequently use CAST?"
          answer="Every branch of a CASE expression must return compatible data types. CAST explicitly defines the result type and avoids compiler errors caused by incompatible branches."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why can't an alias be reused in another expression within the same CDS projection?"
          answer="CDS evaluates all projection expressions in parallel. Since aliases are created only after the projection list has been evaluated, they are not available to other expressions in the same SELECT list."
        />

        <InterviewQuestion
          level="Experienced"
          question="When should you CAST to a semantic data element instead of a built-in data type?"
          answer="Whenever SAP provides a semantic data element representing the business concept. For example, prefer BUKRS over abap.char(4), MATNR over abap.char(40), and WAERS over abap.cuky because they preserve business semantics and improve readability."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is a Sales Order not considered a numeric value even though it contains only digits?"
          answer="A Sales Order is a business identifier rather than a measurable quantity. Although it appears numeric, it represents a document key and should not participate in arithmetic calculations."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between CAST and currency_conversion()?"
          answer="CAST changes only the technical data type of an expression. currency_conversion() changes the business value by applying exchange rates and converting between currencies."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can every source data type be CAST to every target data type?"
          answer="No. CDS supports only specific conversion combinations. Unsupported source and target combinations result in compiler errors during activation."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is CAST commonly used before aggregate functions such as SUM()?"
          answer="CAST ensures that the expression participates in the aggregation using the intended data type, especially when calculations involve different numeric representations."
        />

        <InterviewQuestion
          level="Architect"
          question="Would you use CAST to fix every compiler error related to incompatible data types?"
          answer="No. CAST should never be used as a workaround. First determine whether the underlying CDS model is correct. Repeated CAST expressions often indicate that the data model or layering strategy should be improved."
        />

        <InterviewQuestion
          level="Architect"
          question="How would you avoid repeating the same CAST expression throughout a RAP application?"
          answer="Move the calculation into a lower CDS layer such as an Interface or Composite View and expose the calculated field through higher Projection Views. This avoids duplicated logic and improves maintainability."
        />

        <InterviewQuestion
          level="Architect"
          question="How does CAST support SAP HANA code pushdown?"
          answer="CAST is executed inside the database as part of the SQL statement. This allows SAP HANA to perform the conversion during query execution instead of transferring raw data to the ABAP application server for post-processing."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the biggest misconception developers have about CAST?"
          answer="Many developers believe CAST changes business values such as currencies or units of measure. In reality, CAST changes only the technical data type. Business conversions require dedicated CDS conversion functions."
        />
      </ContentSection>

      <ContentSection title="Architect Checklist Before Using CAST">
        <TableBlock
          title="Production Readiness Checklist"
          headers={["Question", "Recommendation"]}
          rows={[
            [
              "Am I solving a technical compatibility issue?",
              "If yes, CAST may be appropriate.",
            ],
            [
              "Am I trying to change the business value?",
              "Use currency_conversion() or unit_conversion() instead.",
            ],
            [
              "Does a semantic data element already exist?",
              "Prefer semantic data elements over generic built-in types.",
            ],
            [
              "Can this calculation be moved to a lower CDS layer?",
              "Layer Interface, Composite, and Projection Views whenever possible.",
            ],
            [
              "Will another developer immediately understand this CAST expression?",
              "Prioritize readability over clever implementations.",
            ],
            [
              "Am I introducing CAST only to silence a compiler error?",
              "Review the underlying data model before adding CAST.",
            ],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Production-quality CDS Views are not judged by how many advanced
          expressions they contain.
          <br />
          <br />
          They are judged by how easy they are to understand, extend, and
          maintain.
          <br />
          <br />
          CAST should improve the clarity of your data model—not increase its
          complexity.
        </ArchitectNote>
      </ContentSection>

      <CheatSheet
        icon="🔄"
        title="CAST Expression Cheat Sheet"
        stats="Type Conversion • Data Compatibility • SAP HANA Pushdown"
        description="This quick reference summarizes the most important concepts of the CAST expression in ABAP CDS. Use it as a quick guide when converting data types, building calculations, or preparing CDS Views for RAP applications and technical interviews."
      >
        <TableBlock
          headers={["Topic", "Syntax / Value", "Summary"]}
          rows={[
            [
              "Purpose",
              "cast( expression as type )",
              "Converts an expression from one data type to another.",
            ],
            [
              "Changes Database Value?",
              "❌ No",
              "CAST only changes how the value is interpreted; the stored database value remains unchanged.",
            ],
            [
              "Changes Business Meaning?",
              "❌ No",
              "Business semantics remain unchanged after the conversion.",
            ],
            [
              "Typical Usage",
              "CASE, UNION, Calculations",
              "Commonly used for type compatibility, arithmetic expressions, projections, and OData exposure.",
            ],
            [
              "Currency Conversion",
              "currency_conversion()",
              "Use the dedicated conversion function instead of CAST for currency conversion.",
            ],
            [
              "Unit Conversion",
              "unit_conversion()",
              "Use the dedicated conversion function instead of CAST for unit conversion.",
            ],
            [
              "Amount Conversion",
              "curr_to_decfloat_amount()",
              "Preferred when performing calculations on CURR fields.",
            ],
            [
              "Preferred Target Type",
              "Semantic Data Element",
              "Whenever possible, cast to a semantic ABAP data element rather than a primitive type.",
            ],
            [
              "Performance",
              "SAP HANA",
              "CAST is executed directly in the database as part of code pushdown.",
            ],
            [
              "Common Mistake",
              "CAST ≠ Business Conversion",
              "CAST changes only the technical data type, not the business meaning or value.",
            ],
          ]}
        />
      </CheatSheet>

      <KeyTakeaway>
        <p>
          <strong>
            CAST is one of the most frequently used expressions in ABAP CDS, but
            it is often misunderstood.
          </strong>
        </p>

        <p>
          Throughout this lesson, we learned that CAST is responsible only for
          changing the <strong>technical data type</strong> of an expression. It
          does not modify the stored value, perform currency conversion, or
          change the business meaning of the data.
        </p>

        <p>
          We also explored why understanding SAP business semantics is just as
          important as understanding technical data types. Choosing semantic
          data elements such as <strong>BUKRS</strong>,<strong> MATNR</strong>,{" "}
          <strong>WAERS</strong>, and
          <strong> MEINS</strong> results in CDS models that are easier to read,
          easier to maintain, and more closely aligned with SAP's Virtual Data
          Model.
        </p>

        <p>
          Finally, we examined how CAST is used in production CDS View
          Entities—including calculations, CASE expressions, RAP Projection
          Views, OData Services, analytical reporting, and SAP HANA code
          pushdown—along with common compiler errors and architectural best
          practices.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          In the accompanying video, we'll implement every concept covered in
          this lesson using Eclipse ADT and SAP S/4HANA Public Cloud.
        </p>

        <p>
          We'll build real CDS View Entities, explore common compiler errors,
          understand why they occur, and apply CAST correctly in practical RAP
          development scenarios.
        </p>

        {/* TODO: Replace with YouTube component */}
      </ContentSection>

      <ContentSection title="What's Next?">
        <p>
          Now that you understand how to work with different data types and use
          CAST effectively, you're ready to learn one of the most powerful
          expression constructs available in ABAP CDS:
          <strong> CASE Expressions</strong>.
        </p>

        <p>
          In the next lesson, you'll learn how to implement conditional logic
          directly in CDS View Entities using both Simple CASE and Searched
          CASE, create business-friendly calculated fields, combine CASE with
          CAST, and apply these techniques to real-world reporting and RAP
          applications.
        </p>

        <BestPractice>
          <p>
            Before continuing, make sure you're comfortable identifying SAP
            business identifiers, semantic data elements, and the distinction
            between technical and business conversions. These concepts form the
            foundation for many advanced CDS expressions you'll encounter later
            in this learning path.
          </p>
        </BestPractice>
      </ContentSection>

      <PrevNext
        prevTitle="Understanding Built-in Data Types"
        prevHref="/tutorials/rap/cds-view-entity/built-in-data-types"
        nextTitle="CASE Expressions"
        nextHref="/tutorials/rap/cds-view-entity/case-expressions"
      />
    </TutorialLayout>
  );
}

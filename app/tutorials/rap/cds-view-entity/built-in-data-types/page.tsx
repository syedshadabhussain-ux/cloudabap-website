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
      title="Understanding ABAP CDS Built-in Data Types"
      category="CDS View Entity"
      duration="40 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every ABAP Cloud Developer Must Understand CDS Data Types">
        <p>
          One of the first things developers notice when moving from classical
          ABAP programming to ABAP CDS View Entities is that data types are
          defined differently.
        </p>

        <p>
          Although ABAP Classes and CDS View Entities share many common data
          types, their syntax is different. Understanding these differences is
          essential because almost every CDS expression—including CAST, CASE,
          arithmetic operations, currency handling, quantity calculations, and
          conversion functions—depends on choosing the correct data type.
        </p>

        <p>
          If you are building RAP applications, CDS View Entities, or APIs in
          SAP S/4HANA Public Cloud, this is one lesson you should master before
          moving on to more advanced topics.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/business data types.webp"
          alt="ABAP CDS Built-in Data Types"
          caption="Built-in data types form the foundation for every CDS View Entity, RAP Business Object, and Code Pushdown expression."
        />
      </ContentSection>

      <ContentSection title="CDS View Entities and ABAP Classes Do Not Use the Same Syntax">
        <p>
          One of the most common mistakes beginners make is assuming that CDS
          uses exactly the same syntax as ABAP Classes.
        </p>

        <p>
          Although the underlying concepts are similar, CDS View Entities define
          data types using the <strong>abap.*</strong> namespace, whereas ABAP
          Classes use the traditional ABAP type system.
        </p>

        <TableBlock
          title="CDS vs ABAP Class Syntax"
          headers={["Concept", "CDS View Entity", "ABAP Class"]}
          rows={[
            ["Character", "abap.char(40)", "TYPE c LENGTH 40"],
            ["Integer", "abap.int4", "TYPE int4"],
            ["Decimal", "abap.dec(15,2)", "TYPE p LENGTH 8 DECIMALS 2"],
            ["Date", "abap.dats", "TYPE d"],
            ["Time", "abap.tims", "TYPE t"],
            ["String", "abap.string", "TYPE string"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Every experienced RAP developer is comfortable working in both worlds.
          <br />
          <br />
          CDS View Entities use the <strong>abap.*</strong> syntax for defining
          data types, while ABAP Classes continue to use the traditional ABAP
          type declarations.
          <br />
          <br />
          Throughout a RAP application, you will switch between these two
          syntaxes many times every day.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Categories of Built-in Data Types">
        <p>
          Instead of memorizing every individual data type, it is much easier to
          group them into logical categories.
        </p>

        <TableBlock
          title="ABAP CDS Built-in Data Type Categories"
          headers={["Category", "Examples", "Typical Usage"]}
          rows={[
            [
              "Character",
              "CHAR, NUMC, STRING, SSTRING",
              "Business identifiers and text",
            ],
            [
              "Numeric",
              "INT1, INT2, INT4, INT8, DEC",
              "Counters, quantities, calculations",
            ],
            [
              "Decimal Floating",
              "DECFLOAT16, DECFLOAT34",
              "Financial calculations",
            ],
            [
              "Currency & Quantity",
              "CURR, QUAN, CUKY, UNIT",
              "Amounts and units",
            ],
            ["Date & Time", "DATS, TIMS", "Business dates and times"],
            ["Binary", "RAW, RAWSTRING", "UUIDs and binary content"],
          ]}
        />

        <p>
          We will study each category individually before learning how they are
          used in CAST expressions and advanced CDS functions.
        </p>
      </ContentSection>

      <ContentSection title="When Do You Choose a Built-in Data Type?">
        <p>
          Built-in data types should be selected based on the nature of the data
          you are modeling rather than simply choosing the largest available
          type.
        </p>

        <RealWorldExample title="Choosing the Right Type">
          <p>
            A Company Code should not be modeled using
            <strong> abap.string</strong>.
          </p>

          <p>
            Likewise, a Product Description should not be modeled using
            <strong> abap.char(4)</strong>.
          </p>

          <p>
            Choosing the correct data type improves readability, storage
            efficiency, validation, and long-term maintainability.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Select the smallest data type that accurately represents the
            business requirement. Avoid using generic string types unless the
            length of the value is truly unpredictable.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Character Data Types">
        <p>
          Character data types are the most frequently used built-in types in
          CDS View Entities. They are used to store identifiers, codes,
          descriptions, language keys, and other textual business information.
        </p>

        <p>
          Although they appear simple, each character type serves a different
          purpose. Choosing the correct type improves readability and prevents
          unnecessary conversions later in RAP development.
        </p>
      </ContentSection>

      <ContentSection title="1. CHAR (Fixed-Length Character)">
        <p>
          <strong>abap.char()</strong> is the most commonly used built-in data
          type in CDS. It stores a fixed number of characters and is typically
          used for business identifiers whose length never changes.
        </p>

        <TableBlock
          title="CHAR Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[
            ["abap.char(40)", "TYPE c LENGTH 40", "Material Description"],
            ["abap.char(4)", "TYPE c LENGTH 4", "Company Code"],
            ["abap.char(2)", "TYPE c LENGTH 2", "Language"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( Supplier as abap.char(10) ) as SupplierText,
cast( Material as abap.char(40) ) as MaterialDescription`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_company TYPE c LENGTH 4.
DATA lv_name    TYPE c LENGTH 40.`}
        />

        <TableBlock
          title="Common SAP Examples"
          headers={["Business Field", "Length"]}
          rows={[
            ["Company Code", "CHAR(4)"],
            ["Plant", "CHAR(4)"],
            ["Storage Location", "CHAR(4)"],
            ["Language", "CHAR(2)"],
            ["User ID", "CHAR(12)"],
          ]}
        />

        <BestPractice>
          <p>
            Use <strong>abap.char()</strong> when the maximum length of the
            value is known and remains fixed.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="2. NUMC (Numeric Character)">
        <p>
          Although NUMC contains only digits, it is still treated as a
          character-based data type rather than a numeric type.
        </p>

        <p>
          NUMC is commonly used for business document numbers where leading
          zeros must be preserved.
        </p>

        <TableBlock
          title="NUMC Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[["abap.numc(10)", "TYPE n LENGTH 10", "Purchase Order"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( PurchaseOrder as abap.numc(10) ) as PurchaseOrder`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_po TYPE n LENGTH 10.`}
        />

        <p>Example value:</p>

        <CodeBlock title="NUMC Value" code={`4500001234`} />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          NUMC is often misunderstood.
          <br />
          <br />
          Although it contains only digits, SAP treats NUMC as a character
          field. It should not be used for arithmetic calculations.
          <br />
          <br />
          If mathematical operations are required, use one of the numeric data
          types such as <strong>abap.int4</strong> or
          <strong>abap.dec()</strong>.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="3. STRING">
        <p>
          <strong>abap.string</strong> stores variable-length text without
          requiring a predefined maximum length.
        </p>

        <TableBlock
          title="STRING Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[["abap.string", "TYPE string", "Long Descriptions"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( ProductDescription as abap.string ) as Description`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_text TYPE string.`}
        />

        <BestPractice>
          <p>
            Avoid using <strong>abap.string</strong> unless the length of the
            value is genuinely unknown or highly variable.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="4. SSTRING">
        <p>
          <strong>abap.sstring()</strong> represents a short variable-length
          string and is commonly used in CDS View Entities.
        </p>

        <p>
          Unlike <strong>abap.string</strong>, the maximum length must be
          specified.
        </p>

        <TableBlock
          title="SSTRING Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[["abap.sstring(255)", "TYPE string", "Short Descriptions"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( ProductText as abap.sstring(255) ) as ProductText`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_text TYPE string.`}
        />

        <p>
          Although ABAP does not provide an SSTRING keyword for variable
          declarations, the type is widely used in the Dictionary and CDS View
          Entities.
        </p>
      </ContentSection>

      <CheatSheet
        icon="🔤"
        title="Character Data Types Cheat Sheet"
        stats="4 Character Types • Text Handling • Business Identifiers"
        description="This quick reference summarizes the character data types available in ABAP CDS. Use it while selecting appropriate data types for business keys, descriptions, text fields, and variable-length content."
      >
        <TableBlock
          headers={["Type", "CDS Syntax", "ABAP Type", "Typical Usage"]}
          rows={[
            [
              "CHAR",
              "abap.char(40)",
              "TYPE c LENGTH 40",
              "Fixed-length text, IDs, Codes",
            ],
            [
              "NUMC",
              "abap.numc(10)",
              "TYPE n LENGTH 10",
              "Business document numbers, Customer IDs",
            ],
            [
              "STRING",
              "abap.string",
              "TYPE string",
              "Long descriptions, Comments",
            ],
            [
              "SSTRING",
              "abap.sstring(255)",
              "TYPE string",
              "Short variable-length text",
            ],
          ]}
        />
      </CheatSheet>

      <ContentSection title="Numeric Data Types">
        <p>
          Numeric data types are used whenever mathematical calculations,
          aggregations, comparisons, or arithmetic expressions are required.
        </p>

        <p>
          Unlike character types, numeric data types can participate in
          calculations without requiring explicit conversions.
        </p>

        <p>
          SAP provides several numeric data types, each designed for different
          precision and storage requirements.
        </p>
      </ContentSection>

      <ContentSection title="1. Integer Types (INT1, INT2, INT4, INT8)">
        <p>
          Integer data types store whole numbers without decimal places. They
          are commonly used for counters, quantities, loop indexes, flags, and
          other numeric values that never require fractions.
        </p>

        <TableBlock
          title="Integer Types"
          headers={["CDS Type", "ABAP Class", "Typical Usage"]}
          rows={[
            ["abap.int1", "TYPE int1", "Small Counters"],
            ["abap.int2", "TYPE int2", "Small Numeric Values"],
            ["abap.int4", "TYPE int4", "Standard Integer"],
            ["abap.int8", "TYPE int8", "Very Large Numbers"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( ItemCount as abap.int4 ) as ItemCount,
cast( SequenceNo as abap.int8 ) as SequenceNumber`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_counter TYPE int4.
DATA lv_sequence TYPE int8.`}
        />

        <BestPractice>
          <p>
            Use <strong>abap.int4</strong> as the default integer type unless
            there is a specific reason to use a smaller or larger integer.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="2. DEC (Packed Decimal)">
        <p>
          <strong>abap.dec()</strong> represents fixed-point decimal numbers and
          is one of the most commonly used numeric data types in CDS View
          Entities.
        </p>

        <p>
          It is ideal for storing monetary values, percentages, tax amounts,
          discounts, and business calculations requiring a fixed number of
          decimal places.
        </p>

        <TableBlock
          title="DEC Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Example"]}
          rows={[["abap.dec(15,2)", "TYPE p LENGTH 8 DECIMALS 2", "1250.50"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( NetAmount as abap.dec(15,2) ) as NetAmount`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_tax TYPE p LENGTH 8 DECIMALS 2.`}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          This is one of the most common areas of confusion.
          <br />
          <br />
          In CDS, <strong>abap.dec(15,2)</strong> specifies the total number of
          digits and decimal places.
          <br />
          <br />
          In ABAP Classes, packed numbers are declared using
          <strong> LENGTH</strong> in bytes together with the number of decimal
          places.
          <br />
          <br />
          Although both represent packed decimals, the declaration syntax is
          completely different.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="3. DECFLOAT16">
        <p>
          <strong>abap.decfloat16</strong> stores decimal floating-point numbers
          with approximately 16 digits of precision.
        </p>

        <p>
          It provides higher precision than packed decimals and is frequently
          used for exchange rates and financial calculations.
        </p>

        <TableBlock
          title="DECFLOAT16 Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[["abap.decfloat16", "TYPE decfloat16", "Exchange Rate"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( ExchangeRate as abap.decfloat16 ) as ExchangeRate`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_rate TYPE decfloat16.`}
        />
      </ContentSection>

      <ContentSection title="4. DECFLOAT34">
        <p>
          <strong>abap.decfloat34</strong> offers approximately 34 digits of
          precision and is the preferred choice for high-precision business
          calculations.
        </p>

        <TableBlock
          title="DECFLOAT34 Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[
            ["abap.decfloat34", "TYPE decfloat34", "Financial Calculations"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( Amount as abap.decfloat34 ) as Amount`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_amount TYPE decfloat34.`}
        />

        <BestPractice>
          <p>
            Whenever calculations require very high precision, SAP generally
            recommends using <strong>DECFLOAT</strong> types instead of
            traditional floating-point numbers.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="5. FLTP (Floating Point)">
        <p>
          <strong>abap.fltp</strong> represents binary floating-point numbers.
        </p>

        <p>
          Although it supports decimal values, floating-point arithmetic may
          introduce rounding differences due to binary representation.
        </p>

        <TableBlock
          title="FLTP Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Typical Usage"]}
          rows={[["abap.fltp", "TYPE f", "Scientific Calculations"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( Ratio as abap.fltp ) as Ratio`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_ratio TYPE f.`}
        />

        <CommonMistakes
          items={[
            "Using FLTP for currency calculations.",
            "Confusing DEC with DECFLOAT.",
            "Assuming INT types support decimal values.",
            "Using DECFLOAT when fixed decimal precision is required.",
          ]}
        />
      </ContentSection>

      <CheatSheet
        icon="🧮"
        title="Numeric Data Types Cheat Sheet"
        stats="8 Numeric Types • Calculations • Financial & Analytical Processing"
        description="This quick reference summarizes the numeric data types available in ABAP CDS. Use it while designing CDS View Entities for calculations, quantities, financial values, and analytical reporting."
      >
        <TableBlock
          headers={["Type", "CDS Syntax", "ABAP Type", "Common Use Cases"]}
          rows={[
            [
              "INT1",
              "abap.int1",
              "TYPE int1",
              "Flags, Counters, Small Numeric Values",
            ],
            ["INT2", "abap.int2", "TYPE int2", "Small Quantities, Counters"],
            [
              "INT4",
              "abap.int4",
              "TYPE int4",
              "Document Counts, IDs, Standard Calculations",
            ],
            [
              "INT8",
              "abap.int8",
              "TYPE int8",
              "Large Counters, High-Volume Analytics",
            ],
            [
              "DEC",
              "abap.dec(15,2)",
              "TYPE p",
              "Financial Values, Percentages, Fixed Decimal Calculations",
            ],
            [
              "DECFLOAT16",
              "abap.decfloat16",
              "TYPE decfloat16",
              "Scientific & High-Precision Calculations",
            ],
            [
              "DECFLOAT34",
              "abap.decfloat34",
              "TYPE decfloat34",
              "Very High Precision Financial & Scientific Calculations",
            ],
            [
              "FLTP",
              "abap.fltp",
              "TYPE f",
              "Approximate Floating-Point Calculations",
            ],
          ]}
        />
      </CheatSheet>

      <ContentSection title="Currency, Quantity, Date and Binary Data Types">
        <p>
          Besides character and numeric types, CDS View Entities provide
          specialized built-in data types for handling currencies, quantities,
          dates, times, clients, and binary data. These types are widely used in
          RAP applications and SAP standard VDM views.
        </p>
      </ContentSection>

      <ContentSection title="1. CURR (Currency Amount)">
        <p>
          <strong>abap.curr()</strong> represents a currency amount. It should
          be used together with a corresponding currency key field for proper
          currency semantics.
        </p>

        <TableBlock
          title="CURR Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Example"]}
          rows={[
            ["abap.curr(15,2)", "TYPE wrbtr (or TYPE p ...)", "125000.50 INR"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( NetAmount as abap.curr(15,2) ) as NetAmount`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_amount TYPE wrbtr.`}
        />
      </ContentSection>

      <ContentSection title="2. QUAN (Quantity)">
        <p>
          <strong>abap.quan()</strong> represents a business quantity. Like
          CURR, it should always be associated with a Unit of Measure field.
        </p>

        <TableBlock
          title="QUAN Syntax Comparison"
          headers={["CDS View Entity", "ABAP Class", "Example"]}
          rows={[["abap.quan(13,3)", "TYPE menge_d", "250.500 KG"]]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( Quantity as abap.quan(13,3) ) as Quantity`}
        />

        <CodeBlock
          title="ABAP Class"
          language="ABAP"
          code={`DATA lv_qty TYPE menge_d.`}
        />
      </ContentSection>

      <ContentSection title="3. DATS and TIMS">
        <p>
          Dates and times are represented using dedicated built-in data types.
          These are frequently used in business documents, audit fields, and RAP
          applications.
        </p>

        <TableBlock
          title="Date & Time Types"
          headers={["Type", "CDS Syntax", "ABAP Class", "Example"]}
          rows={[
            ["Date", "abap.dats", "TYPE d", "20260702"],
            ["Time", "abap.tims", "TYPE t", "143015"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( CreationDate as abap.dats ) as CreationDate,
cast( CreationTime as abap.tims ) as CreationTime`}
        />
      </ContentSection>

      <ContentSection title="4. CUKY, UNIT and CLNT">
        <p>
          SAP provides dedicated built-in types for currencies, units of
          measure, and client fields.
        </p>

        <TableBlock
          title="Business Semantic Built-in Types"
          headers={["Type", "Purpose", "Typical ABAP Type"]}
          rows={[
            ["abap.cuky", "Currency Key", "WAERS"],
            ["abap.unit", "Unit of Measure", "MEINS"],
            ["abap.clnt", "Client", "MANDT"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( Currency as abap.cuky ) as Currency,
cast( BaseUnit as abap.unit ) as BaseUnit,
cast( Client as abap.clnt ) as Client`}
        />
      </ContentSection>

      <ContentSection title="5. RAW and RAWSTRING">
        <p>
          Binary data types are primarily used for UUIDs, hash values, PDF
          content, images, and other binary objects.
        </p>

        <TableBlock
          title="Binary Types"
          headers={["CDS Type", "ABAP Class", "Typical Usage"]}
          rows={[
            ["abap.raw(16)", "TYPE x LENGTH 16", "UUID"],
            ["abap.rawstring", "TYPE xstring", "PDF / Images"],
          ]}
        />

        <CodeBlock
          title="CDS View Entity"
          language="ABAP CDS"
          code={`cast( UUID as abap.raw(16) ) as UUID`}
        />
      </ContentSection>

      <CheatSheet
        icon="🗂️"
        title="ABAP CDS Built-in Data Types Cheat Sheet"
        stats="21 Built-in Types • Character • Numeric • Date/Time • Binary"
        description="This quick reference summarizes the built-in data types available in ABAP CDS View Entities. Use it while designing CDS Views, selecting appropriate data types, or preparing for technical interviews."
      >
        <TableBlock
          headers={["Type", "CDS Syntax", "ABAP Type", "Example"]}
          rows={[
            ["CHAR", "abap.char(40)", "TYPE c LENGTH 40", "MAT001"],
            ["NUMC", "abap.numc(10)", "TYPE n LENGTH 10", "4500001234"],
            ["INT1", "abap.int1", "TYPE int1", "5"],
            ["INT2", "abap.int2", "TYPE int2", "1500"],
            ["INT4", "abap.int4", "TYPE int4", "100000"],
            ["INT8", "abap.int8", "TYPE int8", "1234567890123"],
            ["DEC", "abap.dec(15,2)", "TYPE p", "18.50"],
            ["CURR", "abap.curr(15,2)", "TYPE wrbtr", "1250.75"],
            ["QUAN", "abap.quan(13,3)", "TYPE menge_d", "250.500"],
            ["DECFLOAT16", "abap.decfloat16", "TYPE decfloat16", "89.234567"],
            [
              "DECFLOAT34",
              "abap.decfloat34",
              "TYPE decfloat34",
              "89.234567890123",
            ],
            ["FLTP", "abap.fltp", "TYPE f", "0.987654321"],
            ["STRING", "abap.string", "TYPE string", "Long Description"],
            [
              "SSTRING",
              "abap.sstring(255)",
              "TYPE string",
              "Short Description",
            ],
            ["RAW", "abap.raw(16)", "TYPE x LENGTH 16", "UUID"],
            [
              "RAWSTRING",
              "abap.rawstring",
              "TYPE xstring",
              "PDF / Binary File",
            ],
            ["DATS", "abap.dats", "TYPE d", "20260702"],
            ["TIMS", "abap.tims", "TYPE t", "143015"],
            ["CUKY", "abap.cuky", "TYPE waers", "INR"],
            ["UNIT", "abap.unit", "TYPE meins", "KG"],
            ["CLNT", "abap.clnt", "TYPE mandt", "100"],
          ]}
        />
      </CheatSheet>

      <CommonMistakes
        items={[
          "Confusing CDS syntax with ABAP Class syntax.",
          "Using STRING when CHAR is sufficient.",
          "Using FLTP for financial calculations instead of DEC or DECFLOAT.",
          "Using CURR without an associated currency key.",
          "Using QUAN without an associated Unit of Measure.",
          "Confusing NUMC with numeric data types.",
        ]}
      />

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        You do not need to memorize every CDS built-in data type.
        <br />
        <br />
        Instead, understand the purpose of each category and remember the
        commonly used types such as <strong>CHAR</strong>,<strong> INT4</strong>
        , <strong>DEC</strong>,<strong> DECFLOAT34</strong>,{" "}
        <strong>CURR</strong>,<strong> QUAN</strong>, <strong>DATS</strong>, and
        <strong> TIMS</strong>.
        <br />
        <br />
        Once these become familiar, learning CAST, CASE expressions, conversion
        functions, and RAP modeling becomes significantly easier because all of
        those features build upon these data types.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is the difference between abap.char() and abap.string?"
          answer="abap.char() is a fixed-length character type, whereas abap.string is variable length and intended for longer or unpredictable text."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is abap.dec(15,2) different from TYPE p LENGTH 8 DECIMALS 2?"
          answer="In CDS, DEC specifies total digits and decimal places. In ABAP Classes, packed numbers are declared using storage length in bytes together with decimal places."
        />

        <InterviewQuestion
          level="Architect"
          question="Which CDS built-in data types do you use most frequently in RAP development?"
          answer="The most common types are CHAR, INT4, DEC, DECFLOAT34, CURR, QUAN, DATS, TIMS, STRING, and SSTRING. The correct choice depends on the business semantics and intended calculations."
        />
      </ContentSection>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          Follow this lesson in Eclipse ADT as we demonstrate every built-in
          data type, compare it with the equivalent ABAP Class syntax, and
          explain where each type is typically used in SAP S/4HANA Public Cloud
          development.
        </p>

        {/* TODO: Replace with YouTube component */}
      </ContentSection>

      <KeyTakeaway>
        <p>
          Built-in data types form the foundation of every CDS View Entity.
          Understanding when to use character, numeric, currency, quantity,
          date, and binary types allows you to build correct, efficient, and
          maintainable data models.
        </p>

        <p>
          The next lesson introduces <strong>CAST Expressions</strong>, where
          you'll learn how to convert between these data types safely and how
          experienced SAP developers use CAST in real RAP projects.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Business Semantic Data Elements"
        prevHref="/tutorials/rap/cds-view-entity/business-semantic-data-elements"
        nextTitle="CAST Expressions"
        nextHref="/tutorials/rap/cds-view-entity/cast-expressions"
      />
    </TutorialLayout>
  );
}

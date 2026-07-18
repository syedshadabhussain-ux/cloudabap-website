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
import FunctionCard from "@/components/tutorials/FunctionCard";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import CheatSheet from "@/components/tutorials/CheatSheet";

export default function Page() {
  return (
    <TutorialLayout
      title="String Functions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="45 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every ABAP Cloud Developer Should Master String Functions">
        <p>
          Business data is not always stored in the exact format required by
          users or downstream applications. Customer numbers may require leading
          zeros, document numbers may need formatting, text values often need
          trimming, and identifiers frequently need to be extracted or modified
          before they are displayed in reports or Fiori applications.
        </p>

        <p>
          Instead of performing these operations in ABAP after retrieving the
          data, SAP recommends pushing string manipulation to the database
          whenever possible. ABAP CDS provides several built-in string functions
          that execute directly in SAP HANA, improving performance while keeping
          business logic inside the CDS View Entity.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/string-function.webp"
          alt="String Functions in ABAP CDS View Entities"
          caption="String Functions allow SAP HANA to format, manipulate and transform text directly inside CDS View Entities, reducing ABAP post-processing."
        />
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <TableBlock
          title="After Completing This Lesson You Will Be Able To"
          headers={["Skill", "Description"]}
          rows={[
            ["Format Business Data", "Pad, trim and format character fields."],
            ["Manipulate Strings", "Extract, replace and search text."],
            ["Improve Performance", "Push string processing to SAP HANA."],
            [
              "Avoid Common Mistakes",
              "Understand the behavior and limitations of string functions.",
            ],
            [
              "Build Better CDS Views",
              "Produce business-ready output directly from CDS.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="String Functions Overview">
        <p>
          SAP provides several built-in string functions that can be grouped
          into four major categories.
        </p>

        <TableBlock
          title="Categories of String Functions"
          headers={["Category", "Functions"]}
          rows={[
            ["Padding", "LPAD(), RPAD()"],
            ["Trimming", "LTRIM(), RTRIM()"],
            [
              "Searching & Extraction",
              "INSTR(), SUBSTRING(), LEFT(), RIGHT(), LENGTH()",
            ],
            ["Modification", "REPLACE(), LOWER(), UPPER(), CONCAT()"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Most production CDS Views use only a small subset of these functions.
          LPAD(), SUBSTRING(), REPLACE(), LENGTH(), and CONCAT() are among the
          most frequently used functions in RAP applications and analytical
          reporting.
        </ArchitectNote>
      </ContentSection>

      <FunctionCard
        name="LPAD()"
        syntax="lpad( source, total_length, pad_character )"
        purpose="Adds characters to the left side of a string until the specified length is reached."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`lpad(
    SoldToParty,
    12,
    '0'
) as Customer`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["12345", "000000012345"],
            ["SAP", "000000000SAP"],
          ]}
        />

        <RealWorldExample title="Customer Number Formatting">
          <p>
            Business Partner, Customer, Vendor, Material and Document numbers
            are often expected to have a fixed length. LPAD() is commonly used
            to prepend leading zeros before exposing values to external systems
            or reports.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Use LPAD() only for presentation purposes. Do not use padded values
            for joins or business logic because they may no longer match the
            original database value.
          </p>
        </BestPractice>
      </FunctionCard>

      <FunctionCard
        name="RPAD()"
        syntax="rpad( source, total_length, pad_character )"
        purpose="Adds characters to the right side of a string until the required length is reached."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`rpad(
    SalesOrganization,
    8,
    '_'
) as SalesOrg`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["1710", "1710____"],
            ["SAP", "SAP****"],
          ]}
        />

        <RealWorldExample title="Fixed-Length Export Files">
          <p>
            Legacy systems often require fixed-width records. RPAD() allows
            shorter values to be extended to the required length while
            preserving the original content.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="LTRIM()"
        syntax="ltrim( source, character )"
        purpose="Removes the specified character from the left side of a string until a different character is encountered."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`ltrim(
    SalesDocument,
    '0'
) as SalesDocument`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["0000123456", "123456"],
            ["0000001000", "1000"],
            ["000120030", "120030"],
          ]}
        />

        <ArchitectNote>
          <strong>Important</strong>
          <br />
          <br />
          LTRIM() removes matching characters only from the beginning of the
          string.
          <br />
          <br />
          Characters appearing later in the string remain unchanged.
        </ArchitectNote>
      </FunctionCard>

      <FunctionCard
        name="RTRIM()"
        syntax="rtrim( source, character )"
        purpose="Removes the specified character from the right side of a string."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`rtrim(
    'SAP****',
    '*'
)`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["SAP****", "SAP"],
            ["ABC___", "ABC"],
          ]}
        />

        <RealWorldExample title="Cleaning Imported Data">
          <p>
            Imported files sometimes contain trailing filler characters or
            padding. RTRIM() removes these characters before exposing the data
            to applications or reports.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="SUBSTRING()"
        syntax="substring( source, start_position, length )"
        purpose="Extracts a portion of a string beginning at a specified position."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`substring(
    SalesDocument,
    1,
    6
) as SalesDocPrefix`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Start", "Length", "Output"]}
          rows={[
            ["9000123456", "1", "6", "900012"],
            ["ABCDEFGHIJ", "4", "3", "DEF"],
          ]}
        />

        <RealWorldExample title="Document Number Prefix">
          <p>
            Many organizations encode business information within document
            numbers. SUBSTRING() allows a CDS View to extract prefixes,
            suffixes, company identifiers, or fiscal information directly in SAP
            HANA.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="LEFT()"
        syntax="left( source, length )"
        purpose="Returns the specified number of characters from the beginning of a string."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`left(
    SalesDocument,
    4
) as Prefix`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["9000123456", "9000"],
            ["ABCDEFGHIJ", "ABCD"],
          ]}
        />

        <RealWorldExample title="Company Prefix">
          <p>
            LEFT() is commonly used when document numbers or business partner
            IDs contain meaningful prefixes that need to be reported
            independently.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="RIGHT()"
        syntax="right( source, length )"
        purpose="Returns the specified number of characters from the end of a string."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`right(
    SalesDocument,
    4
) as Suffix`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["9000123456", "3456"],
            ["ABCDEFGHIJ", "GHIJ"],
          ]}
        />

        <RealWorldExample title="Fiscal Year or Sequence Number">
          <p>
            RIGHT() is frequently used when the last few characters represent
            sequence numbers, fiscal years, or regional identifiers embedded
            within business keys.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="INSTR()"
        syntax="instr( source, search_string )"
        purpose="Returns the position of the first occurrence of a substring."
        returns="Integer"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`instr(
    SalesDocument,
    '1'
) as Position`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Search", "Result"]}
          rows={[
            ["9000123456", "'1'", "5"],
            ["ABCDABC", "'C'", "3"],
            ["ABCDEFG", "'X'", "0"],
          ]}
        />

        <ArchitectNote>
          <strong>Important</strong>
          <br />
          <br />
          Character positions begin at
          <strong> 1</strong>, not zero.
          <br />
          <br />
          If the search text is not found, INSTR() returns
          <strong> 0</strong>.
        </ArchitectNote>

        <RealWorldExample title="Reference Number Validation">
          <p>
            A CDS View can quickly determine whether a separator, prefix, or
            identifier exists inside a reference number before exposing it to
            reporting applications.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="LENGTH()"
        syntax="length( source )"
        purpose="Returns the number of characters contained in a string."
        returns="Integer"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`length(
    CustomerName
) as NameLength`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["SAP", "3"],
            ["CloudABAP", "10"],
            ["Sales Order", "11"],
          ]}
        />

        <RealWorldExample title="Data Quality Checks">
          <p>
            LENGTH() is commonly used in validation CDS Views to identify values
            that do not meet the expected business format, such as customer IDs,
            material numbers, or external reference numbers.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="REPLACE()"
        syntax="replace( source, search_string, replace_string )"
        purpose="Replaces every occurrence of one string with another."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`replace(
    SalesDocument,
    '0',
    'X'
) as FormattedDocument`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["9000123456", "9XXX123456"],
            ["SAP Cloud", "SAP RAP"],
          ]}
        />

        <RealWorldExample title="Data Transformation">
          <p>
            REPLACE() is useful when transforming imported values, standardizing
            separators, masking sensitive data, or preparing text for downstream
            applications.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            REPLACE() substitutes <strong>every</strong> matching occurrence. If
            only the first occurrence should change, additional logic is
            required because REPLACE() does not stop after the first match.
          </p>
        </BestPractice>
      </FunctionCard>

      <FunctionCard
        name="LOWER()"
        syntax="lower( source )"
        purpose="Converts all alphabetic characters to lowercase."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`lower(
    CustomerName
) as CustomerName`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["SAP", "sap"],
            ["CloudABAP", "cloudabap"],
          ]}
        />

        <RealWorldExample title="Search Optimization">
          <p>
            LOWER() helps normalize text before comparisons or search
            operations, ensuring consistent behavior regardless of the original
            letter casing.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <FunctionCard
        name="UPPER()"
        syntax="upper( source )"
        purpose="Converts all alphabetic characters to uppercase."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`upper(
    CustomerName
) as CustomerName`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["sap", "SAP"],
            ["CloudAbap", "CLOUDABAP"],
          ]}
        />

        <RealWorldExample title="Standardized Reporting">
          <p>
            Reports often require values to be displayed in a consistent
            uppercase format regardless of how they were originally entered into
            the system.
          </p>
        </RealWorldExample>
      </FunctionCard>

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        Although all of these functions manipulate strings, they serve very
        different purposes.
        <br />
        <br />
        Use <strong>SUBSTRING()</strong>, <strong>LEFT()</strong>, and
        <strong>RIGHT()</strong> for extraction,
        <strong> INSTR()</strong> for searching,
        <strong> LENGTH()</strong> for validation,
        <strong> REPLACE()</strong> for transformation, and
        <strong> LOWER()/UPPER()</strong> for normalization.
        <br />
        <br />
        Choosing the right function keeps your CDS View easier to understand and
        avoids unnecessary complexity.
      </ArchitectNote>

      <FunctionCard
        name="CONCAT()"
        syntax="concat( source1, source2 )"
        purpose="Concatenates two character strings into a single string."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`concat(
    SalesOrganization,
    DistributionChannel
) as SalesArea`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["1710 + 10", "171010"],
            ["SAP + Cloud", "SAPCloud"],
          ]}
        />

        <RealWorldExample title="Building Composite Business Keys">
          <p>
            CONCAT() is frequently used to combine multiple business fields into
            a single identifier for reporting or integration scenarios.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            CONCAT() joins only two expressions. For longer strings,
            CONCAT_WITH_SPACE() or nested CONCAT() expressions provide better
            readability.
          </p>
        </BestPractice>
      </FunctionCard>

      <FunctionCard
        name="CONCAT_WITH_SPACE()"
        syntax="concat_with_space( source1, source2, spaces )"
        purpose="Concatenates two strings while inserting the specified number of spaces between them."
        returns="Character String"
        supportedTypes={["CHAR", "SSTRING", "STRING"]}
      >
        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`concat_with_space(
    FirstName,
    LastName,
    1
) as FullName`}
        />

        <TableBlock
          title="Example Result"
          headers={["Input", "Output"]}
          rows={[
            ["John + Smith", "John Smith"],
            ["SAP + Cloud", "SAP Cloud"],
          ]}
        />

        <RealWorldExample title="Employee and Business Partner Names">
          <p>
            Instead of nesting multiple CONCAT() functions, CONCAT_WITH_SPACE()
            creates readable display names for employees, customers, suppliers,
            and business partners with minimal code.
          </p>
        </RealWorldExample>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Whenever you simply need to insert spaces between two values,
          CONCAT_WITH_SPACE() is much easier to read and maintain than nested
          CONCAT() expressions.
        </ArchitectNote>
      </FunctionCard>

      <ContentSection title="Common Mistakes">
        <CommonMistakes
          items={[
            "Using LPAD() or RPAD() for business logic instead of presentation formatting.",
            "Assuming SUBSTRING() starts at position 0 instead of 1.",
            "Expecting INSTR() to return -1 when text is not found. It returns 0.",
            "Using REPLACE() when only the first occurrence should be modified.",
            "Writing nested CONCAT() expressions where CONCAT_WITH_SPACE() is clearer.",
            "Performing string manipulation in ABAP that could be pushed down to SAP HANA.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Performance Considerations">
        <p>
          String functions execute directly in SAP HANA as part of the generated
          SQL statement. This allows formatting and transformation to benefit
          from code pushdown while reducing application server processing.
        </p>

        <TableBlock
          title="Performance Recommendations"
          headers={["Recommendation", "Reason"]}
          rows={[
            [
              "Perform formatting in CDS whenever possible.",
              "Supports code pushdown.",
            ],
            [
              "Avoid unnecessary nested functions.",
              "Improves readability and maintainability.",
            ],
            [
              "Use CONCAT_WITH_SPACE() instead of nested CONCAT().",
              "Cleaner and easier to maintain.",
            ],
            [
              "Keep presentation formatting separate from business logic.",
              "Makes CDS Views easier to understand.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is the difference between LPAD() and RPAD()?"
          answer="LPAD() adds characters to the left of a string, while RPAD() adds characters to the right until the specified length is reached."
        />

        <InterviewQuestion
          level="Beginner"
          question="What does SUBSTRING() return?"
          answer="It extracts a portion of a string beginning at the specified position for the requested length."
        />

        <InterviewQuestion
          level="Experienced"
          question="What value does INSTR() return if the search string is not found?"
          answer="INSTR() returns 0."
        />

        <InterviewQuestion
          level="Experienced"
          question="Does SUBSTRING() use zero-based indexing?"
          answer="No. Character positions begin at 1."
        />

        <InterviewQuestion
          level="Experienced"
          question="When should CONCAT_WITH_SPACE() be preferred over CONCAT()?"
          answer="Whenever two values simply need to be joined with spaces, such as building employee names or business partner display texts."
        />

        <InterviewQuestion
          level="Experienced"
          question="Does REPLACE() modify only the first occurrence?"
          answer="No. REPLACE() substitutes every matching occurrence within the source string."
        />

        <InterviewQuestion
          level="Architect"
          question="Why are string functions recommended inside CDS View Entities?"
          answer="Because they execute directly in SAP HANA, reducing ABAP post-processing and supporting code pushdown."
        />

        <InterviewQuestion
          level="Architect"
          question="Which string functions are most commonly used in production RAP projects?"
          answer="LPAD(), SUBSTRING(), LENGTH(), REPLACE(), CONCAT(), CONCAT_WITH_SPACE(), LOWER(), and UPPER()."
        />
      </ContentSection>

      <CheatSheet
        icon="📝"
        title="String Functions Cheat Sheet"
        description="This quick reference summarizes the most commonly used string functions in ABAP CDS. Keep it handy while building CDS View Entities, RAP applications, or preparing for technical interviews."
      >
        <TableBlock
          headers={["Function", "Purpose"]}
          rows={[
            ["LPAD()", "Pad characters on the left"],
            ["RPAD()", "Pad characters on the right"],
            ["LTRIM()", "Remove leading characters"],
            ["RTRIM()", "Remove trailing characters"],
            ["SUBSTRING()", "Extract part of a string"],
            ["LEFT()", "Return leftmost characters"],
            ["RIGHT()", "Return rightmost characters"],
            ["INSTR()", "Find first occurrence"],
            ["LENGTH()", "Return string length"],
            ["REPLACE()", "Replace all matching text"],
            ["LOWER()", "Convert to lowercase"],
            ["UPPER()", "Convert to uppercase"],
            ["CONCAT()", "Join two strings"],
            ["CONCAT_WITH_SPACE()", "Join two strings with spaces"],
          ]}
        />
      </CheatSheet>

      <KeyTakeaway>
        <p>
          String functions enable CDS View Entities to format, transform, and
          manipulate character data directly in SAP HANA. This reduces ABAP
          post-processing while producing business-ready output for RAP
          applications, analytical reports, and APIs.
        </p>

        <p>
          Understanding when to use functions such as LPAD(), SUBSTRING(),
          REPLACE(), LENGTH(), CONCAT(), and CONCAT_WITH_SPACE() allows you to
          build cleaner, more maintainable, and production-ready CDS Views.
        </p>

        <p>
          Whenever string manipulation can be performed in CDS, prefer database
          execution over application-layer processing to fully leverage code
          pushdown in SAP HANA.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          In the accompanying video, we'll implement every string function
          covered in this lesson using Eclipse ADT and SAP S/4HANA Public Cloud.
          We'll build practical examples, discuss common mistakes, and
          demonstrate production-ready scenarios used in RAP applications.
        </p>

        {/* TODO: Replace with YouTube component */}
      </ContentSection>

      <PrevNext
        prevTitle="COALESCE Expression"
        prevHref="/tutorials/rap/cds-view-entity/coalesce-expression"
        nextTitle="Numeric Functions"
        nextHref="/tutorials/rap/cds-view-entity/numeric-functions"
      />
    </TutorialLayout>
  );
}

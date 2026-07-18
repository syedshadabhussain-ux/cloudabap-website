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
      title="CASE Expressions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="50 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every ABAP Cloud Developer Should Master CASE Expressions">
        <p>
          Almost every production CDS View contains some form of business logic.
          Users expect reports to display meaningful descriptions instead of
          technical codes, classify customers into categories, identify high
          value sales orders, highlight overdue deliveries, and calculate
          business statuses.
        </p>

        <p>
          Implementing these requirements in ABAP after retrieving the data is
          certainly possible, but it prevents the application from fully
          benefiting from SAP HANA's code pushdown capabilities.
        </p>

        <p>
          This is where <strong>CASE Expressions</strong> become one of the most
          powerful features available in ABAP CDS.
        </p>

        <p>
          CASE allows business decisions to be evaluated directly inside the
          database, enabling RAP applications, Fiori apps, analytical reports,
          and APIs to return business-ready information without additional ABAP
          processing.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/case-expression.webp"
          alt="CASE Expressions in ABAP CDS View Entities"
          caption="CASE expressions move business decision logic into SAP HANA, allowing CDS View Entities to return business-ready information while maximizing code pushdown."
        />
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <p>
          By the end of this lesson, you'll understand how CASE expressions
          work, when to use Simple CASE versus Searched CASE, and how
          experienced SAP developers implement business logic directly inside
          CDS View Entities.
        </p>

        <TableBlock
          title="After Completing This Lesson You Will Be Able To"
          headers={["Skill", "Description"]}
          rows={[
            [
              "Understand CASE",
              "Explain how CASE expressions work in ABAP CDS.",
            ],
            [
              "Use Simple CASE",
              "Map technical codes to meaningful business descriptions.",
            ],
            [
              "Use Searched CASE",
              "Implement complex business rules using conditional expressions.",
            ],
            [
              "Build Better CDS Views",
              "Push business logic to SAP HANA instead of ABAP.",
            ],
            [
              "Avoid Common Mistakes",
              "Understand evaluation order, NULL handling, and compatible return types.",
            ],
          ]}
        />

        <BestPractice>
          <p>
            Think of CASE as a business rule engine running inside SAP HANA.
            Whenever the logic can be evaluated at the database level, prefer
            implementing it in CDS rather than writing additional ABAP code
            after retrieving the data.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="What is a CASE Expression?">
        <p>
          A CASE expression evaluates one or more conditions and returns a value
          based on the first matching condition.
        </p>

        <p>
          Instead of displaying technical values exactly as they are stored in
          the database, CASE enables CDS View Entities to return meaningful,
          business-friendly information that can be consumed directly by RAP
          applications, Fiori apps, analytical reports, and external APIs.
        </p>

        <CodeBlock
          title="Simple CASE Syntax"
          language="ABAP CDS"
          code={`case SalesDocumentType
    when 'OR' then 'Standard Order'
    when 'RE' then 'Return'
    else 'Other'
end as OrderType`}
        />

        <p>
          Rather than exposing technical document type codes such as
          <strong> OR</strong> and <strong>RE</strong>, the CDS View now returns
          descriptive values that are immediately understandable to business
          users.
        </p>
      </ContentSection>

      <ContentSection title="CASE is an Expression, Not a Control Statement">
        <p>
          Developers coming from classical ABAP often compare CDS CASE with the
          familiar <strong>CASE...ENDCASE</strong> statement.
        </p>

        <p>
          Although their syntax appears similar, they solve different problems.
        </p>

        <TableBlock
          title="ABAP CASE vs CDS CASE"
          headers={["ABAP", "ABAP CDS"]}
          rows={[
            ["Control statement", "Expression"],
            ["Executes procedural logic", "Returns a value"],
            ["Runs in the ABAP application server", "Runs inside SAP HANA"],
            ["Cannot be embedded in SQL", "Can be used inside CDS expressions"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          This is one of the biggest conceptual differences between ABAP and
          CDS.
          <br />
          <br />A CASE expression always returns a value. That value immediately
          becomes part of the CDS projection and can be consumed by
          calculations, RAP Projection Views, OData Services, analytical
          queries, and Fiori applications.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="How CASE is Evaluated">
        <p>CASE expressions are evaluated sequentially from top to bottom.</p>

        <p>
          As soon as one <strong>WHEN</strong> condition evaluates to true, CDS
          immediately returns the corresponding <strong>THEN</strong> value and
          stops evaluating the remaining conditions.
        </p>

        <CodeBlock
          title="Evaluation Order"
          language="ABAP CDS"
          code={`case SalesDocumentType
    when 'OR' then 'Order'
    when 'OR' then 'Duplicate'
    else 'Other'
end`}
        />

        <p>
          If the Sales Document Type is <strong>OR</strong>, the result will be
          <strong> Order</strong>.
        </p>

        <p>
          The second <strong>WHEN</strong> condition is never evaluated because
          the first matching condition terminates the CASE expression.
        </p>

        <BestPractice>
          <p>
            Always arrange WHEN conditions from the most specific to the most
            general. Incorrect ordering can produce unexpected business results
            because later conditions may never be evaluated.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="ELSE is Optional, but Strongly Recommended">
        <p>
          Technically, the ELSE clause is optional. However, experienced SAP
          developers almost always include it.
        </p>

        <CodeBlock
          title="CASE Without ELSE"
          language="ABAP CDS"
          code={`case SalesDocumentType
    when 'OR' then 'Order'
    when 'RE' then 'Return'
end`}
        />

        <p>
          If none of the WHEN conditions match, the result of the expression is
          <strong> NULL</strong>.
        </p>

        <RealWorldExample title="Production Scenario">
          <p>
            Imagine SAP introduces a new Sales Document Type after an upgrade or
            your organization creates a custom document type.
          </p>

          <p>
            Since the CDS View doesn't contain a matching WHEN clause or an ELSE
            branch, every new document suddenly returns NULL, resulting in blank
            values in reports and Fiori applications.
          </p>
        </RealWorldExample>

        <ArchitectNote>
          <strong>Senior Architect Recommendation</strong>
          <br />
          <br />
          Unless NULL is an intentional business requirement, always provide an
          ELSE branch.
          <br />
          <br />
          This makes your CDS View future-proof against newly introduced
          business values and produces more predictable application behavior.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Simple CASE vs Searched CASE">
        <p>
          ABAP CDS supports two different forms of CASE expressions:
          <strong> Simple CASE</strong> and <strong>Searched CASE</strong>.
        </p>

        <p>
          Although both return a value, they solve different types of business
          problems. Understanding when to use each form is one of the most
          frequently discussed topics during ABAP Cloud and RAP interviews.
        </p>

        <TableBlock
          title="Simple CASE vs Searched CASE"
          headers={["Simple CASE", "Searched CASE"]}
          rows={[
            [
              "Compares one expression with multiple values.",
              "Each WHEN contains its own condition.",
            ],
            [
              "Ideal for mapping codes to descriptions.",
              "Ideal for business rules and numeric ranges.",
            ],
            ["Simpler syntax.", "More flexible syntax."],
            [
              "Frequently used for status mapping.",
              "Frequently used for classifications and validations.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Simple CASE">
        <p>
          Simple CASE evaluates a single expression and compares it against
          multiple possible values.
        </p>

        <CodeBlock
          title="Simple CASE"
          language="ABAP CDS"
          code={`case SalesDocumentType
    when 'OR' then 'Standard Order'
    when 'RE' then 'Return Order'
    when 'CR' then 'Credit Memo'
    else 'Other'
end as OrderType`}
        />

        <p>
          In this example, every <strong>WHEN</strong> compares the value of
          <strong> SalesDocumentType</strong>.
        </p>

        <p>Conceptually, CDS evaluates something similar to:</p>

        <CodeBlock
          title="Equivalent Logic"
          code={`SalesDocumentType = 'OR'
SalesDocumentType = 'RE'
SalesDocumentType = 'CR'`}
        />

        <RealWorldExample title="Production Scenario">
          <p>
            SAP applications frequently store technical status codes while
            business users expect descriptive values.
          </p>

          <p>
            Simple CASE is ideal for converting technical codes into meaningful
            business descriptions before the data reaches Fiori applications or
            APIs.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Searched CASE">
        <p>Searched CASE does not compare a single expression.</p>

        <p>
          Instead, each <strong>WHEN</strong> contains its own logical
          condition, making it much more flexible than Simple CASE.
        </p>

        <CodeBlock
          title="Searched CASE"
          language="ABAP CDS"
          code={`case
    when TotalNetAmount >= 10000 then 'High'
    when TotalNetAmount >= 5000 then 'Medium'
    else 'Low'
end as SalesCategory`}
        />

        <p>
          Every WHEN clause is evaluated independently until the first condition
          returns true.
        </p>

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Whenever your business rule involves ranges, comparisons, mathematical
          expressions, multiple fields, or complex conditions, Searched CASE is
          almost always the correct choice.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Evaluation Order Matters">
        <p>CASE expressions are evaluated sequentially from top to bottom.</p>

        <p>Once a condition matches, evaluation stops immediately.</p>

        <CodeBlock
          title="Incorrect Ordering"
          language="ABAP CDS"
          code={`case
    when TotalNetAmount > 0 then 'Positive'
    when TotalNetAmount > 1000 then 'Large'
    else 'Zero'
end`}
        />

        <p>Suppose:</p>

        <CodeBlock title="Input" code={`TotalNetAmount = 2000`} />

        <p>
          Many developers expect the result to be
          <strong> Large</strong>.
        </p>

        <p>The actual result is:</p>

        <CodeBlock title="Actual Result" code={`Positive`} />

        <p>
          The first condition already matches, so the remaining WHEN clauses are
          never evaluated.
        </p>

        <CodeBlock
          title="Correct Ordering"
          language="ABAP CDS"
          code={`case
    when TotalNetAmount > 1000 then 'Large'
    when TotalNetAmount > 0 then 'Positive'
    else 'Zero'
end`}
        />

        <BestPractice>
          <p>
            Always arrange WHEN conditions from the most specific to the most
            general. Otherwise, broader conditions can unintentionally mask more
            specific business rules.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="CASE Can Return More Than Text">
        <p>
          Many developers believe CASE is only useful for returning descriptive
          text.
        </p>

        <p>
          In reality, CASE can return any compatible expression, including
          numbers, dates, fields, arithmetic expressions, and function results.
        </p>

        <TableBlock
          title="CASE Return Values"
          headers={["Return Type", "Example"]}
          rows={[
            ["Character", "'Completed'"],
            ["Integer", "1"],
            ["Decimal", "NetAmount * 0.18"],
            ["Date", "CreationDate"],
            ["Field", "SalesDocument"],
          ]}
        />

        <CodeBlock
          title="Returning Numbers"
          language="ABAP CDS"
          code={`case Currency
    when 'USD' then 1
    when 'EUR' then 2
    else 0
end as CurrencyPriority`}
        />

        <CodeBlock
          title="Returning Fields"
          language="ABAP CDS"
          code={`case SalesOrganization
    when '1710' then SalesDocument
    else SoldToParty
end as BusinessReference`}
        />
      </ContentSection>

      <ContentSection title="Return Types Must Be Compatible">
        <p>Every THEN and ELSE branch should return compatible data types.</p>

        <p>
          This allows the CDS compiler to determine the final type of the
          projected field.
        </p>

        <CodeBlock
          title="Recommended"
          language="ABAP CDS"
          code={`case
    when NetAmount > 1000 then 'High'
    else 'Low'
end`}
        />

        <CodeBlock
          title="Not Recommended"
          language="ABAP CDS"
          code={`case
    when NetAmount > 1000 then 'High'
    else 100
end`}
        />

        <p>
          In the second example, one branch returns character data while the
          other returns a numeric value. Depending on the involved data types,
          CDS may reject the expression or perform implicit conversions that
          make the code harder to understand.
        </p>

        <ArchitectNote>
          <strong>Senior Architect Recommendation</strong>
          <br />
          <br />
          Always make the result type obvious.
          <br />
          <br />
          If necessary, combine CASE with CAST so every branch returns the same
          technical data type. This improves readability and avoids activation
          issues.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Real-World CASE Scenarios">
        <p>
          In production SAP systems, CASE expressions are rarely used to return
          simple text values. They are commonly used to classify business data,
          implement reporting logic, derive statuses, calculate categories, and
          expose business-friendly information to Fiori applications.
        </p>

        <p>
          Let's look at some practical scenarios that you'll encounter while
          developing RAP applications and CDS View Entities.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 1: Convert Technical Status Codes into Business Descriptions">
        <RealWorldExample title="Sales Order Processing Status">
          <p>
            SAP stores many business statuses as short technical codes. Business
            users, however, expect meaningful descriptions instead of values
            such as <strong>C</strong>, <strong>B</strong>, or
            <strong>A</strong>.
          </p>

          <CodeBlock
            title="Sales Order Status"
            language="ABAP CDS"
            code={`case OverallSDProcessStatus
    when 'C' then 'Completed'
    when 'B' then 'In Process'
    when 'A' then 'Not Started'
    else 'Unknown'
end as OverallProcessStatus`}
          />

          <p>
            The CDS View now exposes user-friendly values that can be displayed
            directly in Fiori applications without additional ABAP logic.
          </p>
        </RealWorldExample>

        <BestPractice>
          <p>
            Whenever SAP stores technical codes, convert them into meaningful
            business descriptions as close to the database as possible.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Scenario 2: Customer Classification">
        <p>
          Businesses often classify customers based on their purchasing value.
          Since these rules are evaluated for every record, implementing them
          directly in CDS improves performance and keeps the business logic
          centralized.
        </p>

        <CodeBlock
          title="Customer Classification"
          language="ABAP CDS"
          code={`case
    when TotalNetAmount >= 100000 then 'Premium'
    when TotalNetAmount >= 50000 then 'Gold'
    when TotalNetAmount >= 10000 then 'Silver'
    else 'Standard'
end as CustomerCategory`}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Numeric ranges should almost always be implemented using
          <strong> Searched CASE</strong> rather than Simple CASE because each
          condition performs its own comparison.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Scenario 3: Traffic Light Indicators">
        <p>
          Many SAP Fiori applications display records using traffic light
          indicators to help users identify critical situations at a glance.
        </p>

        <CodeBlock
          title="Delivery Status Indicator"
          language="ABAP CDS"
          code={`case
    when DeliveryDelayDays > 10 then 'Red'
    when DeliveryDelayDays > 5 then 'Yellow'
    else 'Green'
end as TrafficLight`}
        />

        <p>
          The UI simply consumes the calculated field and displays the
          appropriate icon or color.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 4: Aging Buckets">
        <RealWorldExample title="Accounts Receivable Reporting">
          <p>
            Finance departments frequently group invoices into aging buckets
            such as 0–30 days, 31–60 days, and over 90 days.
          </p>

          <CodeBlock
            language="ABAP CDS"
            code={`case
    when DaysOutstanding <= 30 then '0 - 30 Days'
    when DaysOutstanding <= 60 then '31 - 60 Days'
    when DaysOutstanding <= 90 then '61 - 90 Days'
    else 'Over 90 Days'
end as AgingBucket`}
          />

          <p>
            Performing this classification in CDS keeps reporting logic inside
            the database and avoids repeating the same calculation in multiple
            applications.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Scenario 5: CASE Returning Calculated Values">
        <p>
          The THEN expression is not limited to literal values. It can also
          return calculations.
        </p>

        <CodeBlock
          title="Currency-Based Calculation"
          language="ABAP CDS"
          code={`case TransactionCurrency
    when 'USD' then NetAmount * 83
    when 'EUR' then NetAmount * 95
    else NetAmount
end as EstimatedAmount`}
        />

        <p>
          Every branch performs a different calculation depending on the
          business condition.
        </p>

        <ArchitectNote>
          <strong>Important</strong>
          <br />
          <br />
          This example demonstrates conditional calculations only. In production
          systems, actual currency conversion should always use
          <strong>currency_conversion()</strong> rather than fixed exchange
          rates.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Scenario 6: CASE Returning Database Fields">
        <p>CASE can return entire fields instead of literals.</p>

        <CodeBlock
          title="Choose a Business Reference"
          language="ABAP CDS"
          code={`case SalesOrganization
    when '1710' then SalesDocument
    else SoldToParty
end as BusinessReference`}
        />

        <p>
          This allows the projected value to depend dynamically on business
          conditions while keeping the CDS View simple and readable.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 7: Combining CASE with CAST">
        <p>
          CASE and CAST are frequently used together to ensure every branch
          returns a compatible data type.
        </p>

        <CodeBlock
          title="CASE + CAST"
          language="ABAP CDS"
          code={`case
    when NetAmount >= 10000
        then cast( 'High' as abap.char(10) )
    when NetAmount >= 5000
        then cast( 'Medium' as abap.char(10) )
    else
        cast( 'Low' as abap.char(10) )
end as SalesCategory`}
        />

        <p>
          Explicit CAST expressions remove ambiguity and clearly define the
          resulting data type of the CASE expression.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 8: Nested CASE Expressions">
        <p>
          CASE expressions can be nested, allowing one CASE to return another
          CASE expression.
        </p>

        <CodeBlock
          title="Nested CASE"
          language="ABAP CDS"
          code={`case SalesDocumentType
    when 'OR'
        then case TransactionCurrency
                 when 'USD' then 'US Order'
                 else 'Domestic Order'
             end
    else 'Other'
end as OrderCategory`}
        />

        <p>
          Nested CASE is supported, but excessive nesting can reduce
          readability.
        </p>

        <BestPractice>
          <p>
            If CASE expressions become deeply nested or contain extensive
            business rules, consider moving the logic into a lower CDS View,
            customizing table, or application layer to improve maintainability.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Production Design Guidelines">
        <TableBlock
          title="Architect Recommendations"
          headers={["Recommendation", "Reason"]}
          rows={[
            [
              "Prefer Searched CASE for numeric ranges.",
              "More flexible and easier to maintain.",
            ],
            ["Always include ELSE.", "Avoid unexpected NULL values."],
            [
              "Order conditions from most specific to most general.",
              "Prevents earlier conditions from masking later ones.",
            ],
            [
              "Use CASE for business logic, not presentation formatting.",
              "Keeps responsibilities clearly separated.",
            ],
            [
              "Combine CASE with CAST when necessary.",
              "Ensures predictable result data types.",
            ],
            [
              "Avoid deeply nested CASE expressions.",
              "Improves readability and maintainability.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <p>
          CASE expressions are straightforward to write, but small mistakes can
          lead to incorrect business results, activation errors, or unexpected
          NULL values. Understanding these common pitfalls will help you build
          more reliable CDS View Entities.
        </p>

        <CommonMistakes
          items={[
            "Omitting the ELSE clause and unintentionally returning NULL values.",
            "Placing general WHEN conditions before more specific ones.",
            "Mixing incompatible return data types in THEN and ELSE branches.",
            "Using Simple CASE when Searched CASE is more appropriate.",
            "Creating deeply nested CASE expressions that reduce readability.",
            "Implementing presentation formatting instead of business logic inside CASE.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Performance Considerations">
        <p>
          CASE expressions are executed directly in SAP HANA as part of the SQL
          statement. This allows business rules to benefit from code pushdown
          and reduces the need for post-processing in ABAP.
        </p>

        <TableBlock
          title="Performance Recommendations"
          headers={["Recommendation", "Reason"]}
          rows={[
            [
              "Implement business rules in CDS whenever possible.",
              "Reduces ABAP processing and supports code pushdown.",
            ],
            [
              "Keep CASE expressions simple.",
              "Improves readability and maintainability.",
            ],
            [
              "Use Searched CASE for complex conditions.",
              "Provides greater flexibility for production scenarios.",
            ],
            [
              "Move complex business logic into layered CDS Views.",
              "Avoids very long and difficult-to-maintain projection lists.",
            ],
            [
              "Avoid unnecessary nesting.",
              "Makes CDS Views easier to understand and optimize.",
            ],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          CASE expressions themselves are generally inexpensive because they are
          evaluated by SAP HANA.
          <br />
          <br />
          If a CASE expression becomes difficult to read, the issue is usually
          maintainability rather than performance.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is the purpose of a CASE expression in ABAP CDS?"
          answer="CASE returns a value based on one or more conditions, allowing business logic to be evaluated directly in SAP HANA."
        />

        <InterviewQuestion
          level="Beginner"
          question="What happens if no WHEN condition matches and ELSE is omitted?"
          answer="The CASE expression returns NULL."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between Simple CASE and Searched CASE?"
          answer="Simple CASE compares one expression against multiple values, whereas Searched CASE evaluates independent logical conditions in each WHEN clause."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why should WHEN clauses be ordered carefully?"
          answer="CASE is evaluated from top to bottom. Once a condition matches, the remaining WHEN clauses are ignored."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can CASE return numbers or database fields?"
          answer="Yes. CASE can return compatible literals, fields, calculations, dates, numeric values, and expressions."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is Searched CASE preferred for numeric classifications?"
          answer="Because each WHEN clause contains its own logical condition, making it ideal for ranges such as revenue bands, aging buckets, and risk classifications."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can CASE be combined with CAST?"
          answer="Yes. CAST is frequently used inside CASE expressions to ensure every branch returns a compatible data type."
        />

        <InterviewQuestion
          level="Architect"
          question="When should complex CASE logic be moved out of a CDS View?"
          answer="If the business rules become difficult to understand or maintain, move the logic into a lower CDS View, a customizing table, or the application layer instead of creating deeply nested CASE expressions."
        />

        <InterviewQuestion
          level="Architect"
          question="Why are CASE expressions well suited for RAP applications?"
          answer="Because they evaluate business rules directly in SAP HANA, allowing RAP services and Fiori applications to consume business-ready data without additional ABAP processing."
        />
      </ContentSection>

      <CheatSheet
        icon="🔀"
        title="CASE Expression Cheat Sheet"
        stats="Simple CASE • Searched CASE • Evaluation Order • SAP HANA Pushdown"
        description="This quick reference summarizes the key concepts of the CASE expression in ABAP CDS. It covers evaluation order, NULL handling, return type compatibility, and best practices for building production-ready CDS View Entities."
      >
        <TableBlock
          headers={["Topic", "Syntax / Value", "Summary"]}
          rows={[
            [
              "Simple CASE",
              "CASE field WHEN value THEN ...",
              "Compares a single expression against multiple values.",
            ],
            [
              "Searched CASE",
              "CASE WHEN condition THEN ...",
              "Evaluates independent logical conditions and is more flexible.",
            ],
            [
              "Evaluation Order",
              "Top → Bottom",
              "The first matching WHEN condition is returned. Remaining conditions are ignored.",
            ],
            [
              "ELSE Clause",
              "Recommended",
              "Always provide ELSE to avoid unexpected NULL values.",
            ],
            [
              "No Matching WHEN",
              "NULL",
              "If ELSE is omitted and no condition matches, the result is NULL.",
            ],
            [
              "Return Types",
              "Compatible Types",
              "All THEN and ELSE branches should return compatible data types.",
            ],
            [
              "Nested CASE",
              "Supported",
              "Useful for complex logic but should be kept to a minimum for readability.",
            ],
            [
              "Typical Usage",
              "Classification",
              "Frequently used for status mapping, document categorization, risk levels, and business rules.",
            ],
            [
              "Performance",
              "SAP HANA",
              "CASE expressions execute directly in the database as part of code pushdown.",
            ],
            [
              "Architect Recommendation",
              "Prefer Searched CASE",
              "Use searched CASE for ranges and business rules; use simple CASE only for direct value comparisons.",
            ],
          ]}
        />
      </CheatSheet>

      <KeyTakeaway>
        <p>
          CASE expressions are among the most powerful and frequently used
          features of ABAP CDS View Entities. They allow business rules to be
          evaluated directly in SAP HANA, enabling RAP applications, analytical
          reports, and OData services to consume business-ready information
          without additional ABAP processing.
        </p>

        <p>
          Throughout this lesson, you learned the difference between
          <strong> Simple CASE</strong> and
          <strong> Searched CASE</strong>, understood why evaluation order is
          important, explored production-ready scenarios, and discovered best
          practices used by experienced SAP developers.
        </p>

        <p>
          When combined with expressions such as
          <strong> CAST</strong>, aggregate functions, and CDS calculations,
          CASE becomes one of the foundational building blocks for developing
          clean, maintainable, and production-ready RAP applications.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          Follow the complete implementation in Eclipse ADT as we build
          practical CDS View Entities using both Simple CASE and Searched CASE,
          discuss common activation errors, and implement real business
          scenarios used in SAP S/4HANA Public Cloud projects.
        </p>

        {/* TODO: Replace with YouTube component */}
      </ContentSection>

      <PrevNext
        prevTitle="CAST Expressions"
        prevHref="/tutorials/rap/cds-view-entity/cast-expressions"
        nextTitle="COALESCE Expression"
        nextHref="/tutorials/rap/cds-view-entity/coalesce-expression"
      />
    </TutorialLayout>
  );
}

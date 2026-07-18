import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import ThinkLikeCompiler from "@/components/tutorials/ThinkLikeCompiler";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import BestPractice from "@/components/tutorials/BestPractice";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";

export default function Page() {
  return (
    <TutorialLayout
      title="Advanced CDS Features: Session Variables, Parameters and UNION in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="90 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/advance-concepts.webp"
        alt="Advanced CDS Features"
        caption="Master Session Variables, CDS Parameters and UNION to build dynamic, reusable and cloud-ready ABAP CDS View Entities."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why Do Session Variables Exist?">
        <p>
          Imagine you want your CDS View to always return data based on today's
          date, the current logon language or the current client.
        </p>

        <p>Should these values be hard-coded?</p>

        <p>Absolutely not.</p>

        <p>
          Every user logs into the SAP system with a different runtime context.
        </p>

        <p>
          Instead of hard-coding these values, SAP provides
          <strong> Session Variables</strong>.
        </p>

        <blockquote className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic">
          Session Variables provide information about the current SAP session at
          runtime.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Common Session Variables">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Session Variable</th>

              <th className="border px-4 py-3 text-left">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">$session.system_date</td>
              <td className="border px-4 py-3">Current system date.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.system_time</td>
              <td className="border px-4 py-3">Current system time.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.system_language</td>
              <td className="border px-4 py-3">Current logon language.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.client</td>
              <td className="border px-4 py-3">Current client.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.user</td>
              <td className="border px-4 py-3">Current business user.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Example 1 — Current Date">
        <p>
          A common requirement is to display only documents created up to the
          current date.
        </p>

        <CodeBlock
          title="Filter Using Current Date"
          language="ABAP CDS"
          code={`define view entity ZI_SALES

  as select from I_SalesDocument
{
    key SalesDocument,

    CreationDate
}
where

    CreationDate <= $session.system_date;`}
        />

        <p>
          Every time this CDS View is executed, the system automatically
          substitutes <strong>$session.system_date</strong> with the current
          date.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Example 2 — Current Language">
        <p>Text tables usually contain multiple languages.</p>

        <p>
          Instead of hard-coding a language, use the current logon language.
        </p>

        <CodeBlock
          title="Language Filter"
          language="ABAP CDS"
          code={`where

Language = $session.system_language`}
        />

        <p>If the user logs on in English, English texts are returned.</p>

        <p>
          If another user logs on in German, German texts are returned without
          changing the CDS View.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Example 3 — Date Functions">
        <p>
          Session Variables can also be passed directly to built-in functions.
        </p>

        <CodeBlock
          title="Days Since Creation"
          language="ABAP CDS"
          code={`dats_days_between(

    CreationDate,

    $session.system_date

) as DaysSinceCreation`}
        />

        <p>
          The function calculates the number of days between the document's
          creation date and today's date.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Runtime Evaluation"
        thought="Unlike literals, session variables are not fixed values. Their contents are determined only when the CDS View is executed."
        steps={[
          "Compile the CDS View.",
          "Detect the session variable.",
          "Wait until execution.",
          "Read the current session context.",
          "Replace the variable with the runtime value.",
        ]}
        decision="Session Variables are resolved at runtime, not during CDS compilation."
        performanceTip="Use Session Variables whenever a value depends on the current SAP session instead of hard-coding constants."
      />

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Session Variables make CDS Views reusable.
        <br />
        <br />
        Instead of creating separate CDS Views for different dates, languages or
        clients, a single CDS View adapts automatically to the current runtime
        context.
        <br />
        <br />
        This is one of the key principles behind SAP's Virtual Data Model and
        ABAP Cloud development.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Deep Dive into Common Session Variables">
        <p>
          Although Session Variables look like ordinary fields, they are special
          runtime variables provided by the ABAP runtime environment.
        </p>

        <p>
          Every execution of a CDS View may produce different results depending
          on the current user's session.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Variable</th>
              <th className="border px-4 py-3 text-left">Typical Usage</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">$session.system_date</td>
              <td className="border px-4 py-3">Current business date.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.system_time</td>
              <td className="border px-4 py-3">Current system time.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.system_language</td>
              <td className="border px-4 py-3">
                Language-dependent text selection.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.client</td>
              <td className="border px-4 py-3">Client-dependent data.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">$session.user</td>
              <td className="border px-4 py-3">
                Current logged-on business user.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Example — Current Client">
        <p>Most SAP tables are client-dependent.</p>

        <p>
          If required, the current client can be referenced using the session
          variable.
        </p>

        <CodeBlock
          title="Client Example"
          language="ABAP CDS"
          code={`where

Client = $session.client`}
        />

        <p>
          During execution, the runtime automatically substitutes the current
          client value.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Example — Current User">
        <p>
          Some business scenarios require filtering records that belong to the
          current user.
        </p>

        <CodeBlock
          title="User Example"
          language="ABAP CDS"
          code={`where

CreatedByUser = $session.user`}
        />

        <p>
          This allows a single CDS View to behave differently for different
          users without any code changes.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Session Variables Are Evaluated at Runtime">
        <p>Consider the following CDS View.</p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`where

CreationDate <= $session.system_date`}
        />

        <p>Suppose today is:</p>

        <CodeBlock title="Runtime" language="Text" code={`15-Jul-2026`} />

        <p>Internally, the runtime evaluates the expression as if it were:</p>

        <CodeBlock
          title="Executed Condition"
          language="Text"
          code={`CreationDate <= '20260715'`}
        />

        <p>Tomorrow, the same CDS View automatically behaves as:</p>

        <CodeBlock
          title="Next Day"
          language="Text"
          code={`CreationDate <= '20260716'`}
        />

        <p>No transport or code modification is required.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="How the Runtime Handles Session Variables"
        thought="The compiler stores the reference to the Session Variable but cannot determine its value during activation."
        steps={[
          "Compile the CDS View.",
          "Leave the Session Variable unresolved.",
          "Wait for execution.",
          "Read the current SAP session.",
          "Replace the Session Variable with the runtime value.",
          "Execute the SQL statement.",
        ]}
        decision="Session Variables are resolved dynamically every time the CDS View executes."
        performanceTip="Because Session Variables are evaluated by the runtime, the same CDS View can be reused across users, clients and languages."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Hard-coded Value vs Session Variable">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-green-50">
            <tr>
              <th className="border px-4 py-3 text-left">Hard-coded Value</th>

              <th className="border px-4 py-3 text-left">Session Variable</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Fixed after transport.</td>

              <td className="border px-4 py-3">
                Changes automatically at runtime.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Difficult to maintain.</td>

              <td className="border px-4 py-3">Dynamic and reusable.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Environment-specific.</td>

              <td className="border px-4 py-3">Works across all systems.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Requires code changes.</td>

              <td className="border px-4 py-3">No code changes required.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Best Practices">
        <CommonMistakes
          items={[
            "Do not hard-code today's date when $session.system_date can be used.",
            "Use $session.system_language for language-dependent texts.",
            "Avoid creating multiple CDS Views for different clients or users.",
            "Remember that Session Variables are evaluated at runtime, not during activation.",
            "Prefer Session Variables whenever the value depends on the current SAP session.",
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Session Variables are one of the reasons CDS Views remain highly
        reusable.
        <br />
        <br />
        A single CDS View can automatically adapt to different users, languages,
        clients and dates without requiring multiple copies of the same logic.
        <br />
        <br />
        This aligns perfectly with SAP's Virtual Data Model (VDM) philosophy and
        is considered a best practice in ABAP Cloud development.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="CDS Parameters">
        <p>Session Variables are provided automatically by the SAP runtime.</p>

        <p>But sometimes the runtime doesn't know what value should be used.</p>

        <p>For example:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Show Sales Orders for a specific date.</li>

          <li>Show Billing Documents for a particular Company Code.</li>

          <li>Show Purchase Orders for a selected Plant.</li>
        </ul>

        <p className="mt-6">
          These values must be supplied by the application executing the CDS
          View.
        </p>

        <blockquote className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic">
          CDS Parameters allow the caller to provide values at runtime.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Defining Parameters">
        <CodeBlock
          title="CDS with Parameters"
          language="ABAP CDS"
          code={`define view entity ZI_SALES

with parameters

    p_creation_date : abap.dats

as select from I_SalesDocument
{
    key SalesDocument,

    CreationDate,

    SoldToParty
}
where

    CreationDate >= $parameters.p_creation_date;`}
        />

        <p>
          The CDS View now expects a value for
          <strong> p_creation_date</strong> whenever it is executed.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Accessing Parameters">
        <p>
          Parameters are accessed using the
          <strong> $parameters</strong> namespace.
        </p>

        <CodeBlock
          title="Parameter Usage"
          language="ABAP CDS"
          code={`$parameters.p_creation_date`}
        />

        <p>
          Unlike Session Variables, parameters do not have predefined values.
        </p>

        <p>The caller is responsible for supplying them.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Passing Parameters from Open SQL">
        <CodeBlock
          title="Open SQL"
          language="ABAP"
          code={`SELECT *

FROM ZI_SALES(

    p_creation_date = @sy-datum

)

INTO TABLE @DATA(lt_sales).`}
        />

        <p>
          During execution, Open SQL passes the value of
          <strong> sy-datum</strong> to the CDS parameter.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Session Variables vs Parameters">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Session Variable</th>

              <th className="border px-4 py-3 text-left">CDS Parameter</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Runtime provides the value.</td>

              <td className="border px-4 py-3">Caller provides the value.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Always available.</td>

              <td className="border px-4 py-3">Mandatory during execution.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Current Date, User, Client, Language.
              </td>

              <td className="border px-4 py-3">
                Business-specific input values.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Read-only.</td>

              <td className="border px-4 py-3">
                Defined by the CDS developer.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="When Should You Use Parameters?">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-green-50">
            <tr>
              <th className="border px-4 py-3 text-left">Requirement</th>

              <th className="border px-4 py-3 text-left">
                Recommended Approach
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Current Date</td>

              <td className="border px-4 py-3">$session.system_date</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Current User</td>

              <td className="border px-4 py-3">$session.user</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Company Code selected by user
              </td>

              <td className="border px-4 py-3">CDS Parameter</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Plant selected on selection screen
              </td>

              <td className="border px-4 py-3">CDS Parameter</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="How Parameters Work"
        thought="Unlike Session Variables, parameters have no value until the caller supplies one."
        steps={[
          "Compile the CDS View.",
          "Define the parameter metadata.",
          "Wait for execution.",
          "Receive parameter values from the caller.",
          "Execute the SQL statement using those values.",
        ]}
        decision="Parameters make a CDS View reusable by allowing callers to control its behavior."
        performanceTip="Use parameters for business-specific filters instead of creating multiple CDS Views with hard-coded conditions."
      />

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        A simple rule to remember is:
        <br />
        <br />
        <strong>
          Session Variables describe the current SAP environment.
          <br />
          <br />
          Parameters describe what the caller wants.
        </strong>
        <br />
        <br />
        If the value depends on the logged-on user, current date, client or
        language, use a Session Variable.
        <br />
        <br />
        If the value depends on business input from an application or report,
        define a CDS Parameter.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Combining Data Using UNION">
        <p>
          So far, every CDS View in this tutorial has selected data from a
          single source.
        </p>

        <p>
          But real business scenarios often require combining records from
          multiple data sources into a single result set.
        </p>

        <p>
          This is where <strong>UNION</strong> and
          <strong> UNION ALL</strong> become useful.
        </p>

        <blockquote className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic">
          UNION combines the result of multiple SELECT statements into a single
          result set.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="UNION vs UNION ALL">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">UNION</th>

              <th className="border px-4 py-3 text-left">UNION ALL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Removes duplicate rows.</td>

              <td className="border px-4 py-3">Keeps duplicate rows.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Additional duplicate elimination step.
              </td>

              <td className="border px-4 py-3">Better performance.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Use only when duplicates must be removed.
              </td>

              <td className="border px-4 py-3">
                Preferred when duplicates are expected.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Example">
        <CodeBlock
          title="UNION Example"
          language="ABAP CDS"
          code={`define view entity ZI_BUSINESS_PARTNERS

as

select from I_Customer
{
    key Customer     as BusinessPartner,
        CustomerName as Name
}

union all

select from I_Supplier
{
    key Supplier     as BusinessPartner,
        SupplierName as Name
}`}
        />

        <p>
          The result contains both Customers and Suppliers in a single CDS View.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Rules for Using UNION">
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            Both SELECT statements must return the same number of columns.
          </li>

          <li>Columns must appear in the same order.</li>

          <li>Data types must be compatible.</li>

          <li>Field semantics should match.</li>

          <li>
            Use CAST when compatible data types cannot be inferred
            automatically.
          </li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="How UNION Works"
        thought="The compiler validates that every SELECT statement returns a compatible structure before combining the results."
        steps={[
          "Compile the first SELECT.",
          "Compile the second SELECT.",
          "Validate column count.",
          "Validate compatible data types.",
          "Execute both queries.",
          "Combine the results.",
          "Remove duplicates only when UNION is used.",
        ]}
        decision="UNION combines compatible result sets into a single virtual table."
        performanceTip="Prefer UNION ALL unless duplicate elimination is a business requirement."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Choosing the Right Feature">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-green-50">
            <tr>
              <th className="border px-4 py-3 text-left">Requirement</th>

              <th className="border px-4 py-3 text-left">
                Recommended Feature
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Current Date</td>

              <td className="border px-4 py-3">$session.system_date</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Current Language</td>

              <td className="border px-4 py-3">$session.system_language</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">User input</td>

              <td className="border px-4 py-3">CDS Parameters</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Merge multiple result sets</td>

              <td className="border px-4 py-3">UNION / UNION ALL</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Remove duplicates</td>

              <td className="border px-4 py-3">UNION</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Keep duplicates</td>

              <td className="border px-4 py-3">UNION ALL</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="CDS Compiler Quick Reference">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-orange-50">
            <tr>
              <th className="border px-4 py-3 text-left">Feature</th>

              <th className="border px-4 py-3 text-left">Resolved At</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">CAST</td>
              <td className="border px-4 py-3">Compile Time</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">CASE</td>
              <td className="border px-4 py-3">Compile Time</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Associations</td>
              <td className="border px-4 py-3">Compile Time</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Session Variables</td>
              <td className="border px-4 py-3">Runtime</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">CDS Parameters</td>
              <td className="border px-4 py-3">Runtime</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">UNION</td>
              <td className="border px-4 py-3">
                Compile Time Validation + Runtime Execution
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Aggregate Functions</td>
              <td className="border px-4 py-3">SAP HANA Database Engine</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        You have now covered the complete foundation of ABAP CDS View Entities.
        <br />
        <br />
        From creating your first CDS View to advanced topics such as
        Associations, Aggregations, Session Variables, Parameters and UNION, you
        now understand how the CDS compiler thinks and how SAP HANA executes
        your models.
        <br />
        <br />
        These concepts form the foundation for RAP Business Objects, Fiori
        Elements, Analytical Queries and ABAP Cloud development.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          Use <strong>Session Variables</strong> when values come from the
          current SAP runtime, <strong>Parameters</strong> when values are
          supplied by the caller, and <strong>UNION / UNION ALL</strong> when
          combining compatible result sets.
        </p>

        <p>
          Always think about how the CDS compiler validates your model and how
          SAP HANA executes it. Building this mental model will help you design
          scalable, reusable and cloud-ready CDS View Entities.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Congratulations 🎉">
        <div className="rounded-xl border border-green-200 bg-green-50 p-8">
          <h3 className="text-2xl font-bold text-green-800">
            You've Completed the CDS View Entity Learning Path
          </h3>

          <p className="mt-6 text-slate-700">
            You now have a solid understanding of:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>CDS View Entity Fundamentals</li>
            <li>Annotations</li>
            <li>Built-in Data Types</li>
            <li>CAST & CASE Expressions</li>
            <li>String, Numeric, Date & Conversion Functions</li>
            <li>Associations & Cardinality</li>
            <li>Aggregate Functions</li>
            <li>GROUP BY & HAVING</li>
            <li>Session Variables</li>
            <li>CDS Parameters</li>
            <li>UNION & UNION ALL</li>
          </ul>

          <p className="mt-6 text-slate-700">
            You are now ready to build advanced RAP Business Objects and
            enterprise-grade applications on SAP S/4HANA Public Cloud using ABAP
            Cloud.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Aggregate Functions, GROUP BY & HAVING"
        prevHref="/tutorials/rap/cds-view-entity/aggregate-functions-group-by-having"
      />
    </TutorialLayout>
  );
}
